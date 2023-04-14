import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Career from "./pages/Career/Career";
import Education from "./pages/Education/Education";
import Hobbies from "./pages/Hobbies/Hobbies";
import Biography from "./pages/Biography/Biography";
import Projects from "./pages/Projects/Projects";
import ReactJS from "./pages/ReactJS/ReactJS";
import Unity from "./pages/Unity/Unity";
import P5 from "./pages/p5/p5";
import { useState } from "react";

// Pagina de las paletas de colores:
// https://colorhunt.co/palette/e7e0c9c1cfc06b7aa111324d

const App = () => {

  const [hangedManState, setHangedManState] = useState({
    winner : true,
    word : "",
    guesses : [],
    mistakes : [],
    lifes: 3,
    finished : false
  });

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index path="/Portafolio/" element={ <Home /> } />
        <Route path="/Portafolio/About" element={ <About /> } >
          <Route index element={ <Biography /> } />
          <Route path="Education" element={ <Education /> } />
          <Route path="Career" element={ <Career /> } />
          <Route path="Hobbies" element={ <Hobbies /> } />
        </Route>
        <Route path="/Portafolio/Projects" element={ <Projects /> } >
          <Route index element={ <ReactJS state = { hangedManState } setState = { setHangedManState } /> } />
          <Route path="Unity" element={ <Unity /> } />
          <Route path="p5" element={ <P5 /> } />
        </Route>
        <Route path="/Portafolio/Contact" element={ <Contact /> } />
        <Route path="*" element={<Navigate to="/Portafolio" replace={true} />} />
      </Routes>
    </div>
  );
}

export default App;
