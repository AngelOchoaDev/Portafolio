import "./About.css";
import { Link, Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const About = () => {

  const aboutSections = ["Biography","Education", "Career", "Hobbies"];

  const isMobile = useMediaQuery( { maxWidth : 690 } );

  const [nombre,setNombre] = useState("Biography");

  const [isOpen,setIsOpen] = useState( false );

  return (
    <div className="About">
      <div className="About-header">
        {
          isMobile ? (
            <div className="boton-menu-desplegable-about" onClick={ () => { setIsOpen( !isOpen ) } } onMouseLeave = { () => { setIsOpen( false ) } } >
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
                          to={`${ruta === "Biography" ? "" : ruta}`}
                          className="elemento-menu-desplegable"
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
                    to={`${ ruta === "Biography" ? "" : ruta }`}
                    className="About-boton"
                    onClick={ () => { setNombre(ruta) } }
                    style = { { minWidth : 50, paddingLeft : 7, paddingRight : 7 } }
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