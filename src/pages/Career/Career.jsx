import "./Career.css";
import { useMediaQuery } from "react-responsive";
//import data from "./Career-info.json";

const Career = () => {

  const isMobile = useMediaQuery ({ minWidth : 510 });

  //const keys = Object.keys(data);

  return (
    <div className="Career">
      <div className="Career-Header" style={ isMobile ? { fontSize : 40 } : { fontSize : 24 }  }>Aqui puedes ver mi carrera profesional!</div>
      {/* <div className="Career-List">
        { 
          keys.map((key)=>(
            <p className="testing" key={key}>
              {
                Object.keys(data[key]).map((key2)=>(
                  <p className="data" key={key2}>{`${key2} : ${data[key][key2]}`}</p>
                ))
              }
            </p>
          ))
        }
      </div> */}
    </div>
  );
}

export default Career;