let value = [];
const removeFromArray = function(value, ...num) {
    return value.filter(value => !num.includes(value))
};

// Do not edit below this line
module.exports = removeFromArray;