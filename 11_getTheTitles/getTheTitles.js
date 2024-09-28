const getTheTitles = function(books) {
    
    let array = [];
    
    books.map((item) => array.push(item.title));
    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
