const sumAll = function(arg1,arg2) {
    let ans = 0
    if (arg1 > arg2 && arg1 % 1 === 0 && arg1 % 1 === 0 && arg1 > 0 && arg2 > 0 && typeof arg1 === "number" && typeof arg2 === "number") {
        for (let i = arg2; i <= arg1; i++) {
            ans += i
        }
        return ans

    } else if (arg1 < arg2 && arg1 % 1 === 0 && arg1 % 1 === 0 && arg1 > 0 && arg2 > 0 && typeof arg1 === "number" && typeof arg2 === "number") {
        for (let i = arg1; i <= arg2; i++) {
            ans += i
        } 
        return ans
    }  else {
        return ans = "ERROR"
    }
    
};

// Do not edit below this line
module.exports = sumAll;
