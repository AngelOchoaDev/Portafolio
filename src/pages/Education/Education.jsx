import "./Education.css";
import Sketch from "react-p5";

const Education = () => {

  let angle = Math.PI;

  const setup = ( p5 , canvasParentRef ) => {
    p5.createCanvas(200,200).parent(canvasParentRef);
    p5.background("#C1CFC0");
  };

  const draw = ( p5 ) => {
    p5.clear();
    p5.ellipse(100,100, 150 + 25*Math.cos(0.05*angle + Math.PI/2), 150 + 25*Math.sin(0.05*angle),50);
    p5.fill(133,133,133);
    p5.strokeWeight(2);
    angle+=p5.deltaTime*0.1;
  };

  return (
    <div className="Education">
      Education
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

export default Education;