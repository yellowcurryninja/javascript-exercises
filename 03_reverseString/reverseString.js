const reverseString = function(text) {
    let reverse = ""
    for (let i=-1; i >= -text.length; i--) {
        reverse += text.at(i)
    }
    return reverse
};

// Do not edit below this line
module.exports = reverseString;
