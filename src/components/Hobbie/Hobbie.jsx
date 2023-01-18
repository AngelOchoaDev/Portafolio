import "./Hobbie.css";
import { useMediaQuery } from "react-responsive";


const Hobbie = ({ src, title, text, align }) => {

  const isMobile = useMediaQuery( { minWidth : 900 } );

  const isTinyMobile = useMediaQuery( { minWidth : 510 } );

  return (
    <div
      className="Hobbie-Container"
      style={ isMobile
        ? { flexDirection : `${ align==="right" ? "row-reverse" : "row"}` , width : 900 }
        : isTinyMobile
          ? { flexDirection : "column-reverse" , width: 450 }
          : { flexDirection : "column-reverse" , width: 250 }
      }
    >
      <img src={ src } alt={src} className="Hobbie-Img" style={ isTinyMobile ? { width : 450 } : { width : 250 }} />
      <div className="Hobbie-Info" style={ isTinyMobile ? { width : 450 } : { width : 250 }}>
        <div className="Hobbie-Title" style={ isTinyMobile ? { fontSize : 24 } : { fontSize : 18 }} >{title}</div>
        <div className="Hobbie-Text" style={ isTinyMobile ? { fontSize : 18 } : { fontSize : 14 }}>{text}</div>
      </div>
    </div>
  );
}

export default Hobbie;