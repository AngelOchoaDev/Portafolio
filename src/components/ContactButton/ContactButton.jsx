import "./ContactButton.css";
import { useMediaQuery } from "react-responsive";

const ContactButton = ( { direccion , tipo, texto , logo } ) => {

  const isMobile = useMediaQuery({ minWidth : 400 });

  return (
      <a
        href={`${ (tipo === "correo") ? "mailto:" : ( tipo === "telefono" ) ? "https://api.whatsapp.com/send?phone=+521" : "https://"}${ tipo === "correo" ? encodeURIComponent(direccion) : direccion }${ (tipo === "correo") ? ("?subject="+encodeURIComponent("Hola, te contacto desde tu página web.")+"&body="+encodeURIComponent("Buen día!\n\nMe gustaría hablar contigo sobre...")) : ( tipo === "telefono" ) ? "&text="+encodeURIComponent("Hola, buenas tardes. Te contacto desde tu pagina web. Me gustaría hablar contigo sobre...") : "" }`}
        target="_blank"
        rel="noreferrer"
        className={`ContactButton  ${isMobile ? "cb-wide" : "cb-compact" }`}
      >
        <img src={logo} alt={logo} className={`ContactButton-Logo`} />
        { isMobile ? texto : null }
      </a>
  );

}

export default ContactButton;