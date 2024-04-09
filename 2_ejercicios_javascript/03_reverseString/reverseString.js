const word = "hello";

const reverseString = function(word) {
    let finalWord = "";
    for (let lNum = word.length; lNum >= 0; lNum--) {
        finalWord += word.charAt(lNum);
    }
    return finalWord;
};

// Do not edit below this line
module.exports = reverseString;
