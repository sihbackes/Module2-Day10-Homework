/*

ASSIGNMENT RULES

– All the answers must be written in JavaScript

– You can ask for help, reach the Teaching Assistants if needed

– You can Google / use StackOverflow BUT only when you think you need something we didn’t cover during lessons yet

– You can test your code in a separate file or de-commenting the single exercises in this one.

– You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you’re using macOS or Linux.

– Complete as many exercises as you can

*/

// JS Basics

/* EXERCISE A

Create a variable called test and assign a string value to it.

*/
console.log("\n------------------------EXERCISE A -------------------------");

let test = "string";
console.log(test);
/* EXERCISE B

Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.

*/
console.log("\n------------------------EXERCISE B -------------------------");

let sum = 10 + 20;
console.log(sum);

/* EXERCISE C

Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).

*/
console.log("\n------------------------EXERCISE C -------------------------");

let random = Math.floor(Math.random() * 21);
console.log(random);
/* EXERCISE D

Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.

*/

console.log("\n------------------------EXERCISE D -------------------------");

let me = {
  name: "Simone",
  surname: "Backes",
  age: 31,
};

console.log(me);
/* EXERCISE E

Write a piece of code for programmatically removing the age property from the previously create object.

*/
console.log("\n------------------------EXERCISE E -------------------------");

delete me.age;
console.log(me);

/* EXERCISE F

Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.

*/
console.log("\n------------------------EXERCISE F -------------------------");

let skills = ["HTML", "CSS", "JAVASCRIPT"];
me.skills = skills;
console.log(me);

/* EXERCISE G

Write a piece of code for programmatically removing the last skill from the skills array inside the me object.

*/
console.log("\n------------------------EXERCISE G -------------------------");

me.skills.pop();
console.log(me.skills);

// JS Functions

/* EXERCISE 1

Write a function called dice; it should randomize an integer number between 1 and 6.

*/
console.log("\n------------------------EXERCISE 1 -------------------------");

function dice() {
  let random = Math.floor(Math.random() * 6 + 1);
  return random;
}

console.log(dice());

/* EXERCISE 2

Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.

*/
console.log("\n------------------------EXERCISE 2 -------------------------");

function whoIsBigger(a, b) {
  if (a > b) {
    return `The biggest number is ${a}.`;
  } else if (a < b) {
    return `The biggest number is ${b}.`;
  }
}

console.log(whoIsBigger(9, 2));
/* EXERCISE 3

Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.

Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]

*/
console.log("\n------------------------EXERCISE 3 -------------------------");

function splitMe(string) {
  let phrase = string;
  return phrase.split(" ");
}
console.log(splitMe("I love coding"));

/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/
console.log("\n------------------------EXERCISE 4 -------------------------");

function deleteOne(string, boolean) {
  if (boolean === true) {
    let result = string;
    return result.substring(1, result.length);
  } else if (boolean === false) {
    let result = string;
    return result.substring(0, result.length - 1);
  }
}
console.log(deleteOne("simone", true));
console.log(deleteOne("simone", false));

/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"

*/
console.log("\n------------------------EXERCISE 5 -------------------------");

function onlyLetters(string) {
  let result = string;
  return result.replace(/[0-9]/g, "");
}

console.log(onlyLetters("I have 2 cats."));

/* EXERCISE 6

Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.

*/
console.log("\n------------------------EXERCISE 6 -------------------------");

function isThisAnEmail(email) {
  let valid = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (valid.test(email)) {
    return "This is a valid Email.";
  } else {
    return "This is an invalid Email.";
  }
}

console.log(isThisAnEmail("simomebackesv@gmail.com"));
console.log(isThisAnEmail("simome"));
/* EXERCISE 7

Write a function called whatDayIsIt that should return the current day of the week.

*/
console.log("\n------------------------EXERCISE 7 -------------------------");

function whatDayIsIt() {
  let today = new Date();
  let dayOfTheWeek = today.getUTCDay();
  switch (dayOfTheWeek) {
    case 0:
      return "Today is Sunday";
      break;
    case 1:
      return "Today is Monday";
      break;
    case 2:
      return "Today is Tuesday";
      break;
    case 3:
      return "Today is Wednesday";
      break;
    case 4:
      return "Today is Thursday";
      break;
    case 5:
      return "Today is Friday";
      break;
    case 6:
      return "Today is Saturday";
      break;
    default:
      return "I don't know what day is today.";
      break;
  }
}

console.log(whatDayIsIt());

////////// HOMEWORK SOLUTION  ///////////
// const whatDayIsIt = function () {
//   let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   return days[new Date().getDay()];
// };
/* EXERCISE 8

Write a function called rollTheDices which receives a number as a parameter.

It should invoke the dice() function defined in Ex1 the specified amount of times,

and return an object containing a sum property holding the sum of all values extracted

and a values array containing the single values of the dicerolls themselves.

Example: RollTheDices(3) => returns {

sum: 10

values: [3, 3, 4]

}

*/
console.log("\n------------------------EXERCISE 8 -------------------------");

function rollTheDices(number) {
  let loop = 0;
  let array = [];
  while (loop < number) {
    let random = Math.floor(Math.random() * 6) + 1;
    array.push(random);
    loop++;
  }

  console.log(array);

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(rollTheDices(5));
/* EXERCISE 9

Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.

*/

console.log("\n------------------------EXERCISE 9 -------------------------");

function howManyDays(date) {
  let split = date.split("/");
  let day = split[0];
  let month = split[1];
  let year = split[2];

  let fixDate = new Date(month + "/" + day + "/" + year);
  let today = new Date();

  let diff = today.getTime() - fixDate.getTime();

  let daydiff = diff / (1000 * 60 * 60 * 24);

  return Math.floor(daydiff);
}

console.log(howManyDays("08/10/2022"));
console.log(howManyDays("18/12/2020"));
//////////////////////HOMEWORK SOLUTION////////////////////
// const howManyDays = function(selectedDate) {
//   let today = Date.now();
//   let selectedInMilliseconds = Date.parse(selectedDate) //ms
//   return Math.floor((today - selectedInMilliseconds) / (1000 * 60 * 60 * 24))
// };

// let date = howManyDays(("6 Jun 1998"))

// console.log(date)
/* EXERCISE 10

Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.

*/
console.log("\n------------------------EXERCISE 10 -------------------------");

function isTodayMyBirthday(date) {
  let split = date.split("/");
  let day = split[0];
  let month = split[1];
  let year = split[2];

  let fixDate = new Date(month + "/" + day + "/" + year);
  let today = new Date();

  let diff = today.getTime() - fixDate.getTime();

  let daydiff = diff / (1000 * 60 * 60 * 24);

  if (Math.floor(daydiff) === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isTodayMyBirthday("10/10/2022"));
console.log(isTodayMyBirthday("05/11/2022"));
//////////////////////HOMEWORK SOLUTION////////////////////
// const isTodayMyBirthday = function () {
//   let today = new Date();
//   let myBirthday = new Date(1986, 8, 2);
//   let isTodayMyBirthday = false;
//   if (
//     today.getDay() === myBirthday.getDay() &&
//     today.getMonth() === myBirthday.getMonth()
//   ) {
//     isTodayMyBirthday = true;
//   }
//   return isTodayMyBirthday;
// };

// JS Arrays & Objects

// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11

Write a function called deleteProp which receives an object and a string as parameters,

and returns the given object after deleting its property named as the given string.

*/
console.log("\n------------------------EXERCISE 11 -------------------------");

let personalData = {
  name: "Simone",
  surname: "Backes",
  age: 31,
};

function deleteProp(oneObect, string) {
  delete oneObect[string];
  return oneObect;
}

console.log(deleteProp(personalData, "surname"));

//////////////////////////////////////// MOVIES ARRAY /////////////////////////////////////////
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",

    Year: "2001",

    imdbID: "tt0120737",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",

    Year: "2003",

    imdbID: "tt0167260",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Two Towers",

    Year: "2002",

    imdbID: "tt0167261",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },

  {
    Title: "Lord of War",

    Year: "2005",

    imdbID: "tt0399295",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },

  {
    Title: "Lords of Dogtown",

    Year: "2005",

    imdbID: "tt0355702",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings",

    Year: "1978",

    imdbID: "tt0077869",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },

  {
    Title: "Lord of the Flies",

    Year: "1990",

    imdbID: "tt0100054",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },

  {
    Title: "The Lords of Salem",

    Year: "2012",

    imdbID: "tt1731697",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },

  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

    Year: "1984",

    imdbID: "tt0087365",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },

  {
    Title: "Lord of the Flies",

    Year: "1963",

    imdbID: "tt0057261",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },

  {
    Title: "The Avengers",

    Year: "2012",

    imdbID: "tt0848228",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Infinity War",

    Year: "2018",

    imdbID: "tt4154756",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Age of Ultron",

    Year: "2015",

    imdbID: "tt2395427",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* EXERCISE 12

Write a function called oldestMovie which finds the oldest movie in the provided movies array.

*/
console.log("\n------------------------EXERCISE 12 -------------------------");

function oldestMovie() {
  let arrayYears = [];
  for (let i = 0; i < movies.length; i++) {
    arrayYears.push(movies[i].Year);
  }
  let oldestYear = Math.min(...arrayYears);

  let max = 0;
  let min = 0;
  for (let i = 0; i < arrayYears.length; i++) {
    let positionArray = arrayYears[i];

    if (positionArray < arrayYears[min]) {
      min = i;
    }
  }

  return `The oldest movie is ${movies[min].Title} from ${oldestYear}`;
}
console.log(oldestMovie());

function oldestMovie2() {
  let newArray = movies.reduce((lower, value) =>
    lower.Year < value.Year ? lower : value
  );
  return newArray;
}

console.log(oldestMovie2());
//////////////////////HOMEWORK SOLUTION////////////////////
// const oldestMovie = function () {
//   let result = { Year: 2100 };
//   for (let i = 0; i < movies.length; i++) {
//     let currentYear = parseInt(movies[i].Year);
//     if (currentYear < result.Year) {
//       result = movies[i];
//     }
//   }

//   return result;
// };
/* EXERCISE 13

Write a function called countMovies which returns the number of movies contained in the provided movies array.

*/
console.log("\n------------------------EXERCISE 13 -------------------------");

function countMovies() {
  let howMany = 0;
  for (let i = 0; i < movies.length; i++) {
    howMany++;
  }
  return `This list has ${howMany} movies.`;
}

console.log(countMovies());

function countMovies2() {
  let howMany = 0;
  movies.map((value) => howMany++);
  return `This list has ${howMany} movies.`;
}
console.log(countMovies2());

////////////////////// HOMEWORK SOLUTION///////////////////
// const countMovies = function () {
//   return movies.length;
// };
/* EXERCISE 14

Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.

*/
console.log("\n------------------------EXERCISE 14 -------------------------");

function onlyTheTitles() {
  let onlyTitles = [];
  movies.map((value) => onlyTitles.push(value.Title));
  return onlyTitles;
}
console.log(onlyTheTitles());
/* EXERCISE 15

Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.

*/
console.log("\n------------------------EXERCISE 15 -------------------------");

function onlyInThisMillennium() {
  let years = movies.filter((value) => value.Year >= 2001);
  return years;
}
console.log(onlyInThisMillennium());
/* EXERCISE 16

Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.

*/
console.log("\n------------------------EXERCISE 16 -------------------------");

function getMovieById(id) {
  let reference = id;
  let moviesId = movies.find((value) => value.imdbID === reference);
  return moviesId;
}

console.log(getMovieById("tt0120737"));
/* EXERCISE 17

Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.

*/
console.log("\n------------------------EXERCISE 17 -------------------------");

function sumAllTheYears() {
  let sum = movies.reduce((sum, element) => sum + parseInt(element.Year), 0);
  return sum;
}
console.log(sumAllTheYears());
/* EXERCISE 18

Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.

*/
console.log("\n------------------------EXERCISE 18 -------------------------");
function searchByTitle(string) {
  let movieTitle = [];
  movies.map((element) =>
    element.Title.includes(string) ? movieTitle.push(element) : ""
  );
  return movieTitle;
}
console.log(searchByTitle("Salem"));
/* EXERCISE 19

Write a function called searchAndDivide which receives a string as a parameter and returns an object;

this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,

and another array unmatch with all the remaining ones.

*/
console.log("\n------------------------EXERCISE 19 -------------------------");
////////////////////////HOMEWORK SOLUTION ////////////////////
const searchAndDivide = function (word) {
  let result = {
    match: [],
    unmatch: [],
  };
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.indexOf(word) !== -1) {
      result.match.push(movies[i]);
    } else {
      result.unmatch.push(movies[i]);
    }
  }
  return result;
};

console.log(searchAndDivide("simone"));

/* EXERCISE 20

Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.

*/
console.log("\n------------------------EXERCISE 20 -------------------------");

function removeIndex(number) {
  let index = number;
  if (index >= 0 && index <= 13) {
    delete movies[index];
    return movies;
  } else {
    return `Choose a number from 0 to 13.`;
  }
}

console.log(removeIndex(17));

// [EXTRAS] JS Advanced

/* EXERCISE 21

Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.

Example:

halfTree(3)

*

**

***

*/
console.log("\n------------------------EXERCISE 21 -------------------------");
//////////////////////// HOMEWORK SOLUTION//////////////////
const halfTree = function (height) {
  for (let i = 0; i < height; i++) {
    let toPrint = "";
    for (let j = 0; j < i + 1; j++) {
      toPrint += "*";
    }
    console.log(toPrint);
  }
};
console.log(halfTree(5));
/* EXERCISE 22

Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.

Example:

tree(3)

*

***

*****

*/
//////////////////////// HOMEWORK SOLUTION//////////////////
console.log("\n------------------------EXERCISE 22 -------------------------");
const tree = function (height) {
  for (let i = 0; i < height; i++) {
    let stars = "*".repeat(2 * i + 1);
    let spacesBefore = " ".repeat(height - i - 1);
    console.log(spacesBefore + stars);
  }
};
console.log(tree(10));
/* EXERCISE 23

Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.

*/
console.log("\n------------------------EXERCISE 23 -------------------------");
function isItPrime(parameter) {
  let number = parameter;
  let dividers = 0;

  for (let count = 1; count <= number; count++)
    if (number % count == 0) dividers++;

  if (dividers == 2) return `${number} is a prime number`;
  else return `${number} is not a prime number`;
}

console.log(isItPrime(1));
/* WHEN YOU ARE FINISHED

Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today’s Eduflow.

*/

/* This movies array is used throughout the exercises. You’re not supposed to alter it. */
