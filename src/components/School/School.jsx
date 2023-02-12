import "./School.css";
import { useMediaQuery } from "react-responsive";


const School = ({ src , school, institute, level, document, start, end, description, align }) => {

  const isMobile = useMediaQuery( { minWidth : 900 } );

  const isTinyMobile = useMediaQuery( { minWidth : 510 } );

  return (
    <div
      className="School-Container"
      style={ isMobile
        ? { flexDirection : `${ align === "right" ? "row-reverse" : "row" }` , width : 900 }
        : isTinyMobile
          ? { flexDirection : "column-reverse" , width: 450 }
          : { flexDirection : "column-reverse" , width: 250 }
      }
    >
      <img src={ require(`../../img/${src}`) } alt={ src } className="School-Img" style={ isTinyMobile ? { width : 450 } : { width : 250 } } />
      <div className="School-Info" style={ isTinyMobile ? { width : 450 } : { width : 250 }}>
        <div className="School-Title" style={ isTinyMobile ? { fontSize : 24 } : { fontSize : 18 }} >{ level }</div>
        <div className="School-Text" style={ isTinyMobile ? { fontSize : 18 } : { fontSize : 14 }}>
          <div className="School-School">{ `Escuela: ${ school }` }</div>
          <div className="School-Institute">{ `Unidad: ${ institute }` }</div>
          <div className="School-Duration">{ `Duración: ${ start } - ${ end }` }</div>
          <div className="School-Certificate">{ `Documento: ${ document }` }</div>
          <div className="School-Description">{ `Descripción: ${ description }` }</div>
        </div>
      </div>
    </div>
  );
}

export default School;