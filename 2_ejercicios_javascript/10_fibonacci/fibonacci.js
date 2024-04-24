const fibonacci = function(fibonacci) {
    if (fibonacci < 0) return "OOPS";
    let num1 = 0;
    let num2 = 1;
    let number = 1;
    for (let index = 1; index < Number(fibonacci); index++) {
        //console.log( "Num1 = ", num1 ," y num2 = ", num2)
        number = num1 + num2;
        num1 = num2;
        num2 = number;
        //console.log("fibonacci: ", number)
    }
    //console.log("fibonacci: ", number)
    return number
};


// Do not edit below this line
module.exports = fibonacci;
