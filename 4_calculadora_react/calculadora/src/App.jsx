import { useState } from "react";
import "./App.css";
import { Button } from "./Components/button";
import * as math from "mathjs";

const initialButtons = [
  {
    id: "zero",
    character: 0,
    dataType: "number"
  },
  {
    id: "one",
    character: 1,
    dataType: "number"
  },
  {
    id: "two",
    character: 2,
    dataType: "number"
  },
  {
    id: "three",
    character: 3,
    dataType: "number"
  },
  {
    id: "four",
    character: 4,
    dataType: "number"
  },
  {
    id: "five",
    character: 5,
    dataType: "number"
  },
  {
    id: "six",
    character: 6,
    dataType: "number"
  },
  {
    id: "seven",
    character: 7,
    dataType: "number"
  },
  {
    id: "eight",
    character: 8,
    dataType: "number"
  },
  {
    id: "nine",
    character: 9,
    dataType: "number"
  },
  {
    id: "sum",
    character: "+",
    dataType: "operator"
  },
  {
    id: "rest",
    character: "-",
    dataType: "operator"
  },
  {
    id: "mult",
    character: "*",
    dataType: "operator"
  },
  {
    id: "div",
    character: "/",
    dataType: "operator"
  },
  {
    id: "equal",
    character: "=",
    dataType: "result"
  },
  {
    id: "clear",
    character: "c",
    dataType: "clear"
  },
  {
    id: "decimal",
    character: ".",
    dataType: "decimal"
  }
];
let displayResult = "";
let result = 0;

function App() {
  const [display, setDisplay] = useState("");

  //Añadir caracter pulsando botón
  function addCharacter(character, dataType) {
    console.log("click: ", character, dataType);
    displayResult = display + "" + character;
    checkCharacters(displayResult);
    //console.log("UseState display: ", display)
  }

  //Añadir caracter por teclado
  function handleChange(e) {
    console.log("Value= ", e.target.value);
    const displays = e.target.value;
    checkCharacters(displays);
    //return displays;
  }

  //Comprobaciones
  function checkCharacters(displayResult, ...dataType) {
    let displayArray = displayResult.split("");
    console.log(displayArray);
    let arrayIndex = displayArray.length - 1;
    let lastCharacter = displayArray[arrayIndex];
    let penultimo = displayArray[displayArray.length - 2];
    console.log("último caracter: ", lastCharacter);

    console.log("Result es: ", result);

    //Si display está vacio
    if (display === "") {
      //console.log("Display vacio", displayResult, dataType)
      displayResult === "/" || displayResult === "*" || displayResult === "=" ? displayShow("Error") : displayShow(displayResult);
    } else {
      // Si no está vacio
      //console.log("Display con cosas")

      if (display === "Error") {
        lastCharacter === "/" || lastCharacter === "*" ? displayShow("Error") : displayShow(lastCharacter);
        //displayShow(lastCharacter);
        //console.log("Error entra:", lastCharacter)
      } else {
        if (result === 1) {
          console.log("result caracter: ", lastCharacter);
          if (lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "*" || lastCharacter === "/") {
            console.log("operador", lastCharacter);
            displayShow(displayResult);
            result = 0;
          } else {
            result = 0;
            displayShow(lastCharacter);
          }
          //result = 0;
        } else {
          if (lastCharacter === "=") {
            //console.log( "Penúltimo caracter: ", penultimo, "Array: ", displayArray);
            if (penultimo === "+" || penultimo === "-" || penultimo === "*" || penultimo === "/") {
              displayShow("Error");
              console.log;
            } else {
              console.log("Display antes operación: ", display);
              displayResult = math.evaluate(display);
              result = 1;
              displayShow(displayResult);
            }
          } else displayShow(displayResult);
          console.log("Resultado: ", displayResult);
          if (lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "*" || lastCharacter === "/") {
            console.log("ultimo si es operador");
            penultimo === "+" || penultimo === "-" || penultimo === "*" || penultimo === "/" ? displayShow("Error") : console.log("continua");
          } else {
            console.log("ultimo no es operador");
          }
        }
      }
    }
    if (lastCharacter === "c") {
      displayShow("");
      console.log("Se limpia");
    } else console.log("No se limpia");
  }

  //Mostrar por pantalla
  function displayShow(display) {
    //antes de pintar comprobar errores
    //console.log("Sin pintar: ", display)
    setDisplay(display);
  }

  function operations(displays) {
    //console.log("Display", display)
  }

  return (
    <>
      <div className="calculadora">
        <input className="display" value={display} onChange={(e) => handleChange(e)}></input>
        <section className="button-section">
          {initialButtons.map((button) => (
            <Button clickar={addCharacter} character={button.character} id={button.id} dataType={button.dataType} key={button.id} />
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
