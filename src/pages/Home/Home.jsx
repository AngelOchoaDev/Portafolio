import "./Home.css";
import { useMediaQuery } from "react-responsive";

const Home = () => {

  const isMobile = !useMediaQuery( { minWidth : 500 } );

  return (
    <div className="Home">
      <div className="Home-Header" style = { isMobile ? { fontSize : 22 } : { fontSize : 28 } } >
        { "¡ Bienvenidos a mi pagina web !" }
      </div>
      <div className="Home-Body">
        <div className="Home-Container">
          <div className="Home-Title" style = { isMobile ? { fontSize : 20 } : { fontSize : 24 } } >
            { "¿Quien soy?" }
          </div>
          <div className="Home-Text" style = { isMobile ? { fontSize : 16 } : { fontSize : 20 } } >
            { "Me llamo Angel Ochoa, tengo 27 años y vivo en la Ciudad de México. Vivo con mis padres, una hermana y dos hermosas gatas. Estudié la carrera de Ingeniería Mecatrónica en la UPIITA - IPN. Soy cinta negra tercer Dan en Karate Do, soy técnico reparador de computadoras a nivel de microelectrónica y soy un apasionado de los videojuegos y series animadas. Actualmente me encuentro buscando trabajo como desarrollador de aplicaciones web y microservicios con spring boot. Si quieres saber mas de mí te invito a ir a la sección llamada 'About'."}
          </div>
        </div>
        <div className="Home-Container">
          <div className="Home-Title" style = { isMobile ? { fontSize : 20 } : { fontSize : 24 } } >
            { "¿A qué me quiero dedicar?" }
          </div>
          <div className="Home-Text" style = { isMobile ? { fontSize : 16 } : { fontSize : 20 } } >
            { "Estoy en busca de empleo en el cual pueda desarrollar mis habilidades para la creación de aplicaciones web con Spring / Spring Boot enfocado a backend (microservicios, API REST) o en su defecto crear aplicaciones web con ReactJS para el frontend (como lo son las SPA). Mi objetivo es convertirme en desarrollador full-stack el cual pueda brindar soluciones de manera consistente, haciendo uso de buenas prácticas así como estar actualizandome día con día de las nuevas tecnologías. Si quieres saber más de mis proyectos actuales te invito a visitar la sección llamada 'Projects'." }
          </div>
        </div>
      </div>
      {/* <div className="Home-Container">
        <div className="Home-Title">{ "¿Qué me gusta hacer en un futuro?" }</div>
        <div className="Home-Text">{ "Mi objetivo es ser un elemento importante dentro de una empresa el cual brinde soluciones rápidas y eficaces" }</div>
      </div> */}
    </div>
  );
}

export default Home;
