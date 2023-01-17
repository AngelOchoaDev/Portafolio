import "./Hobbies.css";
import Hobbie from "../../components/Hobbie/Hobbie.jsx";
import { useMediaQuery } from "react-responsive";

const Hobbies = ({ HobbiesData }) => {

  const isMobile = useMediaQuery ({ minWidth : 510 });

  const keys = Object.keys(HobbiesData);

  return (
    <div className="Hobbies">
      <div className="Hobbies-Header" style={ isMobile ? { fontSize : 40 } : { fontSize : 24 }  }>Aqui te dejo mis hobbies!</div>
      <div className="Hobbies-List">
        { 
          keys.map((key)=>(
            <Hobbie
              key={key}
              src={HobbiesData[key]["image"]}
              title={HobbiesData[key]["titulo"]}
              text={HobbiesData[key]["texto"]}
              align={HobbiesData[key]["align"]}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Hobbies;