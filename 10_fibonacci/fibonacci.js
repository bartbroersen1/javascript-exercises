const fibonacci = function(number) {
    if (number < 0) {return "OOPS"};
    let array = [0, 1];
    for (i = 0; i < (number); i++) {
        let fibonacci = array[0 + i] + array[1 + i];
        array.push(fibonacci);
    };
    return array[array.length - 2];
};

// Do not edit below this line
module.exports = fibonacci;
