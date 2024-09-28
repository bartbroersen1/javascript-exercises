const findTheOldest = function(people) {

    people.map((person) => {
        if (typeof person.yearOfDeath == "undefined") {
            person.yearOfDeath = new Date().getFullYear();
    }});
    people.sort((a, b) => {
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    });
    return people[0]; 
};

// Do not edit below this line
module.exports = findTheOldest;
