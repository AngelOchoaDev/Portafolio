import "./ReactJS.css";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const ReactJS = ( { state, setState } ) => {

  return (
    <div className="ReactJS">
      <div className="ReactJS-Header">{"Este juego ha sido realizado con ReactJS"}</div>
      <Ahorcado state={state} setState={setState} />
    </div>
  );
}

const Ahorcado = ( { state , setState } ) => {

  const isMobile = !useMediaQuery( { minWidth : 750 } );

  const [ winner, setWinner ] = useState( () => state["winner"] );

  const [ word, setWord ] = useState( () => state["word"] );

  const [ guesses, setGuesses ] = useState( () => state["guesses"] );

  const [ mistakes, setMistakes ] = useState( () => state["mistakes"] );

  const [ lifes, setLifes ] = useState( () => state["lifes"] );

  const [ finished, setFinished ] = useState( () => state["finished"] );

  const alphabet = "abcdefghijklmnopqrstuvWxyz";

  const words = {
    easy : ["esternocleomastoideo","desoxiribonucleico"],
    normal : ["astronauta", "aparcamiento"],
    hard : ["gato", "perro", "silla", "casa", "mesa"], 
  };

  useEffect( () => {
    console.log(winner);
    console.log(word);
    console.log(guesses);
    console.log(mistakes);
    console.log(lifes);
    console.log(finished);

    return ( () => { setState( { winner : winner, word : word, guesses : guesses, mistakes : mistakes, lifes : lifes, finished : finished } ) } );
  } , [ winner, word, guesses, mistakes, lifes, finished ] );

  const difficultyHandle = ( difficulty ) => {
    const array = words[difficulty];
    const position = Math.floor(array.length *Math.random());
    setWord(words[difficulty][position]);
    setLifes( difficulty=== "easy" ? 7 : difficulty === "normal" ? 5 : 3 );
  };

  const resetHandle = () => {
    setWinner(true);
    setWord("");
    setGuesses([]);
    setMistakes([]);
    setLifes(3);
    setFinished(false);
  };

  return (
    <div className="Ahorcado" style={ isMobile ? { width : 300 } : { width : 700 } } >
      <div className="Ahorcado-Header">{"Juego del ahorcado"}</div>
      <div className="Ahorcado-Contenedor-Principal" style={ isMobile ? { width : 250 } : { width : 700 } } >
        {
          winner
          ? ( <div className="Ahorcado-Boton" onClick={ () => { setWinner(false) } } >{"Empezar"}</div> )
          : ( <div className="Ahorcado-Contenedor-Juego">
            {
              word === ""
              ? ( <div className="Ahorcado-Contenedor-Secundario" style={ isMobile ? { width : 250 } : { width : 700 } } >
                <p>{"Seleccione la difficultad:"}</p>
                <div className="Ahorcado-Botones-Dificultad" >
                  <div className="Ahorcado-Boton" onClick={ () => { difficultyHandle("easy") } }  >{"Fácil"}</div>
                  <div className="Ahorcado-Boton" onClick={ () => { difficultyHandle("normal") } }  >{"Normal"}</div>
                  <div className="Ahorcado-Boton" onClick={ () => { difficultyHandle("hard") } }  >{"Dificil"}</div>
                </div>
              </div> )
              : (<div className="Ahorcado-Contenedor-Secundario" style={ isMobile ? { width : 250 } : { width : 850 } } >
                <div>{"Tu palabra es:"}</div>
                <div className="Ahorcado-Palabra-Seleccionada" style={ isMobile ? { width : 250 } : { width : 600 } } >
                  {
                    word.split("").map( ( letter, index ) => (
                      <div key={ index } className="Ahorcado-Letra-Seleccionada">{`${ guesses.includes( letter ) ? letter : "_"}`}</div>
                    ))
                  }
                </div>
                <div className="Ahorcado-Vidas">{`Intentos: ${lifes}`}</div>
                {
                  lifes <= 0
                  ? (<div>{"Has perdido !"}</div> )
                  : finished
                  ? (<div>{"Has ganado !"}</div> )
                  : ( <div className="Ahorcado-Abecedario" style={ isMobile ? { width : 250 } : { width : 600 } } >
                  {
                    alphabet.split("").map( ( letter ) => (
                      <div
                        key={letter}
                        className={`Ahorcado-Letra-Abecedario ${ (guesses.includes(letter)||mistakes.includes(letter)) ? "Ahorcado-Deshabilitado" : "Ahorcado-Habilitado"}`}
                        onClick={ () => {
                          if( !(guesses.includes(letter)||mistakes.includes(letter)) ) {
                            const temp = word.split("");
                            if ( temp.includes(letter) ) {
                              setGuesses( guesses => [...guesses, letter] );
                            }
                            else {
                              setMistakes( mistakes => [... mistakes, letter] );
                              setLifes( lifes - 1 );
                            }
                            let tempWinner = temp.filter( ( item, index ) => temp.indexOf( item ) === index );
                            let tempWord = [...guesses, letter];
                            if ( tempWinner.length === tempWord.length ) setFinished(true); 
                          }
                        }}
                      >
                        {letter}
                      </div>
                    ))
                  }
                </div> )
                }
              </div> )
            }
            <div className="Ahorcado-Boton" style={ { marginTop : 20 } } onClick={ resetHandle } >Salir</div>
          </div> )
        }
      </div>
    </div>
  );
}

export default ReactJS;