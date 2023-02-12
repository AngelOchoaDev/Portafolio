import "./Career.css";
import { useMediaQuery } from "react-responsive";
import data from "./Career-info.json";
import Job from "../../components/Job/Job";

const Career = () => {

  const isMobile = useMediaQuery ({ minWidth : 510 });

  const keys = Object.keys(data);

  return (
    <div className="Career">
      <div className="Career-Header" style={ isMobile ? { fontSize : 40 } : { fontSize : 24 }  }>
        Aqui puedes ver mi carrera profesional!
      </div>
      <div className="Career-List">
        {
          keys.map( ( key ) => (
            <Job
              key={ key }
              align={ data[key]["align"] }
              title={ data[key]["Nombre"] }
              src={ data[key]["src"] }
              job={ data[key]["Cargo"] }
              start={ data[key]["Fecha de Inicio"] }
              end={ data[key]["Fecha de Termino"] }
              description={data[key]["Descripcion"] }
            />
          ))
        }
      </div>
    </div>
  );
}

export default Career;