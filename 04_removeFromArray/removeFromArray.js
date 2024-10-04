const removeFromArray = function(arrays,...replacements) {
    let newArray = []
    for (let array of arrays) {
        if (!replacements.includes(array)) {
            newArray.push(array)
        }}
        
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
