import "./Career.css";
import { useMediaQuery } from "react-responsive";

const Career = () => {

  const isMobile = useMediaQuery ({ minWidth : 510 });

  //const keys = Object.keys(data);

  return (
    <div className="Career">
      <div className="Career-Header" style={ isMobile ? { fontSize : 40 } : { fontSize : 24 }  }>Aqui puedes ver mi carrera profesional!</div>
      <div className="Career-List">
        {/* { 
          keys.map((key)=>(
            <Hobbie
              key={key}
              src={data[key]["src"]}
              title={data[key]["titulo"]}
              text={data[key]["texto"]}
              align={data[key]["align"]}
            />
          ))
        } */}
      </div>
    </div>
  );
}

export default Career;