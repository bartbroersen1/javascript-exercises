const sumAll = function(numOne, numTwo) {  
    
    let numLow;
    let numHigh;
    const numArray = [];
    let sum = 0;

    if (!Number.isInteger(numOne || numTwo)
        || numOne < 0 || numTwo < 0) {
        return "ERROR";
    }
    else if (numOne < numTwo) {
        numLow = numOne;
        numHigh = numTwo;
    }
    else if (numOne > numTwo) {
        numLow = numTwo;
        numHigh = numOne;
    }
    else {
        return numOne;
    }

    for (i = numLow; i <= numHigh; i++) {
        numArray.push(i);
    }

    for (i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
