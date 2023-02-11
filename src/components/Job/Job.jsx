import "./Job.css";
import { useMediaQuery } from "react-responsive";


const Job = ({ src , title, job, start, end, description, align }) => {

  const isMobile = useMediaQuery( { minWidth : 900 } );

  const isTinyMobile = useMediaQuery( { minWidth : 510 } );

  return (
    <div
      className="Job-Container"
      style={ isMobile
        ? { flexDirection : `${ align==="right" ? "row-reverse" : "row"}` , width : 900 }
        : isTinyMobile
          ? { flexDirection : "column-reverse" , width: 450 }
          : { flexDirection : "column-reverse" , width: 250 }
      }
    >
      <img src={ require(`../../img/${src}`) } alt={ src } className="Job-Img" style={ isTinyMobile ? { width : 450 } : { width : 250 } } />
      <div className="Job-Info" style={ isTinyMobile ? { width : 450 } : { width : 250 }}>
        <div className="Job-Title" style={ isTinyMobile ? { fontSize : 24 } : { fontSize : 18 }} >{ title }</div>
        <div className="Job-Text" style={ isTinyMobile ? { fontSize : 18 } : { fontSize : 14 }}>
          <div className="Job-Job">{ `Puesto: ${ job }` }</div>
          <div className="Job-Duration">{ `Duración: ${ start } - ${ end }` }</div>
          <div className="Job-Description">{ `Descripción: ${ description }` }</div>
        </div>
      </div>
    </div>
  );
}

export default Job;