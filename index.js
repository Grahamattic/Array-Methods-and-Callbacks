import { fifaData } from './fifa.js';
console.log(fifaData); 

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the
following pieces of data 

(a) Home Team name for 2014 world cup final*/

        // First, I need to find the index of the 2014 World Cup Final.
        function getHomeTeamByName(array, year){

            let homeTeam = [];
            let index = 0;
        
            for(i = 0; i < array.length; i++) {
                if ((array[i].Year === 2014) &&
                    (array[i].Stage === "Final")) {
                    index = i;
                }
            }
            console.log(index);
        }
        
        getHomeTeamByName(fifaData, 2014);


        // Now that I know the index, I can console.log any key value pair.
        console.log(fifaData[828]["Home Team Name"]);



/* (b) Away Team name for 2014 world cup final*/

        // It should be as simple as console.log(fifaData[828].awayTeamName);
        // However, for some reason the home team name is not a key. console.log(fifaData[828].Year);
        // returns the year correctly, although the previous console.log does not work.

        console.log(fifaData[828]["Away Team Name"]);



/* (c) Home Team goals for 2014 world cup final*/

        console.log(fifaData[828]["Home Team Goals"]);



/* (d) Away Team goals for 2014 world cup final */

        console.log(fifaData[828]["Away Team Goals"]);



/*
(e) Winner of 2014 world cup final */

        console.log(fifaData[828]["Win conditions"]);



/* Task 2: Create a function called  getFinals that takes `data` as an argument
and returns an array of objects with only finals data */

        function getFinals(array) {
        
            let finalsData = [];
        
            finalsData = array.filter(function(finals) {
                return finals.Stage === "Final";
            });
            console.log(finalsData);
        };

        getFinals(fifaData);



/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function
`getFinals`, and returns an array called `years` containing all of the years in the dataset */

        // My question for WEBPT23_help:
        // Although the function below works as intended, how do I take in the fifaData dynamically,
        // from the original getYears function call, so that it passes fifaData to the callback function?

        function getFinals(array) {

            let finalsData = [];
        
            finalsData = array.filter(function(finals) {
                return finals.Stage === "Final";
            });
            return finalsData;
        };
        
        function getYears(callback) {
        
            let finalYears = getFinals(fifaData);
          
          const years = finalYears.map(i => i.Year);
          console.log(years);
        };
        
        getYears(getFinals);



/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback
function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the
 name of all winning countries in an array called `winners` */ 

        // My question for WEBPT23_help:
        // Although the function below works as intended, how do I take in the fifaData dynamically,
        // from the original getYears function call, so that it passes fifaData to the callback function?

        // Also, am I suppsed to determine the winner from the goals scored, for the games that did not have
        // a winner declared?


        // Try to answer this question using the .map and .filter array methods.

function getFinals(array) {

    let finals = [];

    for(i = 0; i < array.length; i++) {
        if (array[i].Stage === "Final") {
            finals.push(array[i]);
        }
    }
    return finals;
}

function getWinners(callback) {

    let finalYears = getFinals(fifaData);
    
    let years = [];
    
    for(i = 0; i < finalYears.length; i++) {
        years.push(finalYears[i].Year);
    }
    console.log(years);
};

getWinners(getFinals);

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following
parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

 // Try to answer this question using the .map array method.

function getWinners(callback1) {
        
    let years = getFinals(fifaData);
    console.log(winners);
};

function getYears(callback2) {

    let years = getFinals(fifaData);
    console.log(years);
};

function getWinnersByYear(callback1, callback2) {

    
};

getWinnersByYear(getWinners, getYears);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
