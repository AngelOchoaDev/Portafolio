import "./About.css";
import { Link, Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const About = () => {

  const aboutSections = ["Overview","Education", "Career", "Hobbies"];

  const isMobile = useMediaQuery( { maxWidth : 630 } );

  const [nombre,setNombre] = useState("Overview");

  const [isOpen,setIsOpen] = useState( false );

  return (
    <div className="About">
      <div className="About-header">
        {
          isMobile ? (
            <div className="boton-menu-desplegable-about" onClick={ () => { setIsOpen(!isOpen); } }>
              <div className="bar-about 1" />
              <div className="bar-about 2" />
              <div className="bar-about 3" />
              {
                isOpen ? (
                  <div className={"menu-desplegable-about"}>
                    {
                      aboutSections.map( ruta => (
                        <Link
                          key={ruta}
                          to={`${ruta === "Overview" ? "" : ruta}`}
                          className="elemento-menu-desplegable"
                          onClick={ () => { setNombre(ruta) } }
                          >{ruta}</Link>
                      ))
                    }
                  </div>
                ) : null
              }
            </div>
          ) : (
            <div className="About-botones">
              {
                aboutSections.map( ruta => (
                  <Link
                    key={ruta}
                    to={`${ ruta === "Overview" ? "" : ruta }`}
                    className="About-boton"
                    onClick={ () => { setNombre(ruta) } }
                  >
                    {ruta}
                  </Link>
                ))
              }
            </div>
            
          )
        }
        <div className="About-title">
          { nombre }
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default About;