import "./Biography.css";
import { useMediaQuery } from "react-responsive";
import data from "./Biography_info.json";

const Biography = () => {

  const isMobile = !useMediaQuery( { minWidth : 500 } );

  const keys = Object.keys(data);

  return (
    <div className="Biography">
      <div className = "Biography-Header" style = { isMobile ? { fontSize : 20 } : { fontSize : 28 } } >Mi biografía</div>
      <div className = "Biography-Body">
        {
          keys.map( key => (
            <div className="Biography-Container" key={ key }>
              <div className="Biography-Text" style={ isMobile ? { fontSize : 14 } : { fontSize : 18 } }>{ data[key] }</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Biography;