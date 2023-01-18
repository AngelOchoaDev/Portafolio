import "./Hobbies.css";
import Hobbie from "../../components/Hobbie/Hobbie.jsx";
import { useMediaQuery } from "react-responsive";

const Hobbies = ({ data, images }) => {

  const isMobile = useMediaQuery ({ minWidth : 510 });

  const keys = Object.keys(data);

  return (
    <div className="Hobbies">
      <div className="Hobbies-Header" style={ isMobile ? { fontSize : 40 } : { fontSize : 24 }  }>Aqui te dejo mis hobbies!</div>
      <div className="Hobbies-List">
        { 
          keys.map((key)=>(
            <Hobbie
              key={key}
              src={images}
              title={data[key]["titulo"]}
              text={data[key]["texto"]}
              align={data[key]["align"]}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Hobbies;