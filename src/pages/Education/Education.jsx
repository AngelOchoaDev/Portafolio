import "./Education.css";
import { useMediaQuery } from "react-responsive";
import School from "../../components/School/School.jsx";


const Education = () => {

  const isMobile = useMediaQuery ({ minWidth : 510 });

  //const keys = Object.keys(data);

  return (
    <div className="Education">
      <div className="Education-Header" style={ isMobile ? { fontSize : 40 } : { fontSize : 24 }  }>
        Aqui puedes ver mis estudios !
      </div>
      <div className="Education-List">
        {/* {
          keys.map( ( key ) => (
            <School
              src = { "a" }
              title = { "a" }
              level = { "a" }
              document = { "a" }
              start = { "a" }
              end = { "a" }
              description = { "a" }
              align = { "a" }
            />
          ))
        } */}
        <School
          src = { "logo.png" }
          title = { "a" }
          level = { "a" }
          document = { "a" }
          start = { 2015 }
          end = { 2014 }
          description = { "a" }
          align = { "right" }
        />
      </div>
    </div>
  );
}

export default Education;