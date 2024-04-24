const palindromes = function (word) {
    if(typeof word !== 'string') return "ERROR" 
    const convertedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const palindromo = convertedWord.split('').reverse(re).join('')
    //console.log(palindromo)
    return convertedWord === palindromo
};

// Do not edit below this line
module.exports = palindromes;
