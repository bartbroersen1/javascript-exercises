const removeFromArray = function(array, ...numRemove) {
    for (i = 0; i < numRemove.length; i++) {
        while (array.includes(numRemove[i])) {
        array.splice(numRemove[i] - 1, 1);
        if (numRemove.length = 0) break;
        };
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
