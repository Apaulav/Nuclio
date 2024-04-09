const sumAll = function(num1, num2) {
    if (num1 >= 0 && num2 >= 0 && typeof num2 === 'number' && typeof num1 === 'number') {
        if (num1 < num2) {
            let sum = num1;
            for (let index = 2; index < num2+1; index++) {
                sum = sum + index; 
            }
            return sum
        } else {
            let sum = num2;
            for (let index = 2; index < num1+1; index++) { 
                sum = sum + index;             
            }
            return sum
        }      
    } else return"ERROR" 
};

// Do not edit below this line
module.exports = sumAll;
