const repeatString = function(string,number) {
    let str = string
    for (let i=1; i < number; i++) {
        str += string
    }
    if (number == 0 || string == "") {
        return str = ""
    } else if (number < 0) {
       return str = "ERROR"
    } else {
       return str
    }
};

// Do not edit below this line
module.exports = repeatString;
