const removeFromArray = function(array, itemToRemove) {
    
    return array.filter(item => item !== itemToRemove);
};

let array = [1, 2, 3, 4];

console.log(removeFromArray(array, 4));

// Do not edit below this line
module.exports = removeFromArray;
