/*



- mantener el cursor en el input
- cuando se escriba en el input recoger el valor
- proteger si el primer caracter no es un número
- Botón borrar solo un caracter
- el primer caracter tiene que se un número
- si se ha escrito un signo después tiene que ir un número no puede ir ni +, -, *,/ o igual
- El punto del decimal solo se puede escribir si se ha puesto un número
- cuando obtengo un resultado no se tiene que poder usar el del

*/ 


// Obtener todos los botones
const nums = document.querySelectorAll('.button')
let oper = ""
let result = ""
let arrayoper = []
const displayBox = document.getElementById("display")





//Mostrar por pantalla
function displayText (number) {
    console.log("boton: ", number)
    console.log("display: ", displayBox.value)
    if (number === "") {
        displayBox.value = number
        console.log("display after: ", displayBox.value)
    } else {
        displayBox.value += number
        console.log("display after: ", displayBox.value)
    }
}

// Escuchar cada botón cuando se le da clic
nums.forEach((num) => {
    num.addEventListener('click', function() {
        // Obtener el id del botón que se ha hecho clic
        console.log("button: ", num)
        const numId = this.id
        let numValue =document.getElementById(numId).innerHTML
        console.log('Se hizo clic en el botón con el id: ', numId, " y ", numValue)
        //Display
        
        oper = document.getElementById("display").value
        arrayoper = oper.split('')
        console.log("Display array: ", arrayoper[0])
        //Si ya se ha hecho una operación comprueba si se pulsa +, -, *, / o = y continua el display, en caso contrario se resetea 
        if (result !== "" && numId != "clear" && numId != "del") {
            if (numValue === "+" || numValue === "-" || numValue === "*" || numValue === "/"  || numValue === "+" ) {
                console.log("result: ", result)
                displayText(numValue)
                result = ""
            } else {
                result = ""
                console.log("result: ", result)
                number = ""
                displayText('')
                displayText(numValue)
            }
        } else {
            switch (this.dataset.type) {
                case "result":
                    //proteger si el primer caracter no es un número
                    //oper = document.getElementById("display").value
                    console.log(oper.split())
                    console.log("Operación: ", oper)
                    console.log("El resultado es: "+ math.evaluate(oper))
                    result = math.evaluate(oper);
                    displayText('')
                    console.log("hecho")
                    displayText(result)
                    break;
                case "clear":
                    result = ""
                    displayText("")
                    break;
                case "del":
                    //oper = document.getElementById("display").value
                    //console.log("Operación: ", oper, "eliminar: ", math.subset(oper, math.index([0,1,2])))
                    //arrayoper = oper.split('')
                    //console.log(arrayoper)
                    let lastchar = oper.length - 1
                    oper = arrayoper.splice(lastchar, 1)
                    numValue = Number(arrayoper.join('')) //arrayoper.join('')
                    displayText('')
                    //console.log(Number(numValue))
                    displayText(numValue)
                    break;
                case "number":
                    console.log("separar: ", arrayoper)
                    console.log("data: ", this.dataset.type)
                    displayText(numValue)
                    break;
                case "operator":
                    console.log("separar: ", arrayoper)
                    console.log("data: ", this.dataset.type)
                    displayText(numValue)
                    break;
                default:
                    
                    break;
            }
        }
        
    });
});



