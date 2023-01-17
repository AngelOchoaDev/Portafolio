import "./Contact.css";
import datos from "./Contact_info.json";
import ContactButton from "../../components/ContactButton/ContactButton";
import { useMediaQuery } from "react-responsive";

const Contact = () => {

  const isMobile = useMediaQuery( { minWidth : 400 } );

  const titulos = ["Aqui te dejo mis redes sociales!","Puedes contactarme en cualquiera de ellas!"];

  const keys = Object.keys(datos);

  return (
    <div className="Contact">
      <div className="Contact-Header">
        {
          isMobile ? 
            (<><h1>{titulos[0]}</h1><h2>{titulos[1]}</h2></>) : 
            (<><h3 style={{ width : 300 }}>{titulos[0]}</h3><p style={{ width : 300 }}>{titulos[1]}</p></>)
        }
      </div>
      <div className={"Contact-Button-Container"}>
        {
          keys.map((key)=>(
            <ContactButton
              key={key}
              direccion={datos[key]["direccion"]}
              tipo={datos[key]["tipo"]}
              texto={datos[key]["texto"]}
              logo={datos[key]["logo"]}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Contact;