import "./Header.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";


const Header = () => {

  const rutas = ["Home","About","Contact"];

  const isMobile = useMediaQuery( { maxWidth : 530 } );

  const isTinyMobile = useMediaQuery( { maxWidth : 310 } );

  const [ isOpen, setIsOpen ] = useState( false );

  return (
    <div className="Header">
      <Link to={"/Portafolio"} className="titulo-header" >{isTinyMobile ? "AOD" : "AngelOchoaDev"}</Link>
      {
        isMobile ? (
          <div className="boton-menu-desplegable-header" onClick={ () => { setIsOpen(!isOpen); } }>
            <div className="bar 1" />
            <div className="bar 2" />
            <div className="bar 3" />
            {
              isOpen ? (
                <div className={"menu-desplegable-header"}>
                  {
                    rutas.map( ruta => (
                      <Link key={ruta} to={`/Portafolio/${ruta === "Home" ? "" : ruta}`} className={"boton-menu-desplegable"} >{ruta}</Link>
                    ))
                  }
                </div>
              ) : null
            }
          </div>
        ) : (
          <div className="menu-header">
          {
            rutas.map( ruta => (
              <Link key={ruta} to={`/Portafolio/${ruta === "Home" ? "" : ruta}`} className="boton-header" >{ruta}</Link>
            ))
          }
      </div>
        )
      }
    </div>
  );
}

export default Header;