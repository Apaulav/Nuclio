const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
      name: "Paula",
      yearOfBirth: 1985,
    },
  ]

const findTheOldest = function(people) {
  const today = new Date();
  return people.reduce((oldest, person) => {
    const age1 = getAge(person.yearOfBirth, person.yearOfDeath || today.getFullYear());
    const age2 = getAge(oldest.yearOfBirth, oldest.yearOfDeath || today.getFullYear());
    return age1 > age2 ? person : oldest;
  });
    
};

function getAge(birthYear, deathYear) {
  return deathYear - birthYear;
}

findTheOldest(people)

// Do not edit below this line
module.exports = findTheOldest;
