import "./Home.css";

const Home = () => {

  return (
    <div className="Home">
      <div className="Home-Header">{ "¡ Bienvenidos a mi pagina web !" }</div>
      <div className="Home-Container">
        <div className="Home-Title">{ "¿Quien soy?" }</div>
        <div className="Home-Text">{ "Me llamo Angel Ochoa, tengo 27 años y vivo en la Ciudad de México. Vivo con mis padres, una hermana y dos hermosas gatas. Estudié la carrera de Ingeniería Mecatrónica en la UPIITA - IPN. Soy cinta negra tercer Dan en Karate Do, soy técnico reparador de computadoras a nivel de microelectrónica y soy un apasionado de los videojuegos y series animadas. Actualmente me encuentro buscando trabajo como desarrollador de aplicaciones web y microservicios con spring boot."}</div>
      </div>
      <div className="Home-Container">
        <div className="Home-Title">{ "¿A qué me quiero dedicar?" }</div>
        <div className="Home-Text">{ "Estoy en busca de empleo en el cual pueda desarrollar mis habilidades para la creación de aplicaciones web con Spring / Spring Boot enfocado a backend (microservicios, API REST) o en su defecto crear aplicaciones web con ReactJS para el frontend (como lo son las SPA con react-router)." }</div>
      </div>
      {/* <div className="Home-Container">
        <div className="Home-Title">{ "¿Qué me gusta hacer en un futuro?" }</div>
        <div className="Home-Text">{ "Mi objetivo es ser un elemento importante dentro de una empresa el cual brinde soluciones rápidas y eficaces" }</div>
      </div> */}
    </div>
  );
}

export default Home;
