const word = 'Hey';
const num = '3';

const repeatString = function(word, num) {
    if (num>=0){
        let printWord = "";
        for (let index = 0; index < num; index++) {
            printWord = printWord + word;
        }
        return printWord;
    } else {
        return "ERROR"
    }
    
};

// Do not edit below this line
module.exports = repeatString;