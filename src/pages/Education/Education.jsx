import "./Education.css";
import data from "./Education_info.json";
import { useMediaQuery } from "react-responsive";
import School from "../../components/School/School.jsx";


const Education = () => {

  const isMobile = useMediaQuery ({ minWidth : 510 });

  const keys = Object.keys(data);

  return (
    <div className="Education">
      <div className="Education-Header" style={ isMobile ? { fontSize : 40, marginLeft : 10, marginRight : 10 } : { fontSize : 22, marginLeft : 10, marginRight : 10 }  }>
        { "Aqui puedes ver mis estudios !" }
      </div>
      <div className="Education-List" onClick={ () => { console.log("hola"); } }>
        {
          keys.map( ( key ) => (
            <School
              key         = { key }
              level       = { key }
              school      = { data[key]["Escuela"] }
              institute   = { data[key]["Unidad"] }
              document    = { data[key]["Documento"] }
              start       = { data[key]["Inicio"] }
              end         = { data[key]["Fin"] }
              description = { data[key]["Descripción"] }
              src         = { data[key]["src"] }
              align       = { data[key]["align"] }
            />
          ))
        }
      </div>
    </div>
  );
}

export default Education;