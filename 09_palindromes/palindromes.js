const palindromes = function (string) {
    let array = string
    .replace( /[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    .replace(/\s/g, '')
    .toLowerCase()
    .split("");
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== (array[array.length - 1 - i])) {
            return false;
        }
    };
    return true;
};

// Do not edit below this line
module.exports = palindromes;
