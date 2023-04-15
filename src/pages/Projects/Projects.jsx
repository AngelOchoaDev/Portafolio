import "./Projects.css";
import { Link, Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const Projects = () => {

  const projectsSections = ["ReactJS", "Unity", "p5"];

  const isMobile = useMediaQuery( { maxWidth : 450 } );

  const [nombre,setNombre] = useState("ReactJS");

  const [isOpen,setIsOpen] = useState( false );

  return (
    <div className="Projects">
      <div className="Projects-header">
        {
          isMobile ? (
            <div className="boton-menu-desplegable-projects" onClick={ () => { setIsOpen( !isOpen ) } } onMouseLeave = { () => { setIsOpen( false ) } } >
              <div className="bar-projects 1" />
              <div className="bar-projects 2" />
              <div className="bar-projects 3" />
              {
                isOpen ? (
                  <div className={"menu-desplegable-projects"}>
                    {
                      projectsSections.map( ruta => (
                        <Link
                          key={ruta}
                          to={`${ruta === "ReactJS" ? "" : ruta}`}
                          onClick={ () => { setNombre(ruta) } }
                          className="elemento-menu-desplegable-projects"
                          >{ruta}</Link>
                      ))
                    }
                  </div>
                ) : null
              }
            </div>
          ) : (
            <div className="Projects-botones">
              {
                projectsSections.map( ruta => (
                  <Link
                    key={ruta}
                    to={`${ ruta === "ReactJS" ? "" : ruta }`}
                    className="Projects-boton"
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
        <div className="Projects-title">
          { nombre }
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Projects;