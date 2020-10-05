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

        console.log(fifaData[828]["Away Team Name"]);



/* (c) Home Team goals for 2014 world cup final*/

        console.log(fifaData[828]["Home Team Goals"]);



/* (d) Away Team goals for 2014 world cup final */

        console.log(fifaData[828]["Away Team Goals"]);



/* (e) Winner of 2014 world cup final */

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
function `getFinals()` and determines the winner (home or away) of each `finals` game. Return the
 name of all winning countries in an array called `winners` */ 

        function getFinals(array) {

            let finalsData = [];

            finalsData = array.filter(function(finals) {
                return finals.Stage === "Final";
            });
            return finalsData;
        };

        function getWinners(callback) {

            let finalsDataFiltered = getFinals(fifaData);
            
            let winners = [];
            
            for(i = 0; i < finalsDataFiltered.length; i++) {
                if (finalsDataFiltered[i]["Home Team Goals"] === finalsDataFiltered[i]["Away Team Goals"]) {
                    console.log("In " + finalsDataFiltered[i].Year + ", the World Cup Final ended in a tie.");
                    }
                else if (finalsDataFiltered[i]["Home Team Goals"] > finalsDataFiltered[i]["Away Team Goals"]) {
                    winners.push(finalsDataFiltered[i]["Home Team Name"]);
                }
                else if (finalsDataFiltered[i]["Away Team Goals"] > finalsDataFiltered[i]["Home Team Goals"]) {
                    winners.push(finalsDataFiltered[i]["Away Team Name"]);
                }
            }
            console.log(winners);
        };

        getWinners(getFinals);

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following
parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

        function getFinals(array) {

            let finalsData = [];

            finalsData = array.filter(function(finals) {
                return finals.Stage === "Final";
            });
            return finalsData;
        };

        function getWinners() {

            let finalsDataFiltered = getFinals(fifaData);
            
            let winners = [];
            
            for(i = 0; i < finalsDataFiltered.length; i++) {
                if (finalsDataFiltered[i]["Home Team Goals"] === finalsDataFiltered[i]["Away Team Goals"]) {
                    console.log("In " + finalsDataFiltered[i].Year + ", the World Cup Final ended in a tie.");
                    }
                else if (finalsDataFiltered[i]["Home Team Goals"] > finalsDataFiltered[i]["Away Team Goals"]) {
                    winners.push(finalsDataFiltered[i]["Home Team Name"]);
                }
                else if (finalsDataFiltered[i]["Away Team Goals"] > finalsDataFiltered[i]["Home Team Goals"]) {
                    winners.push(finalsDataFiltered[i]["Away Team Name"]);
                }
            }
            return winners;
        };

        function getYears(callback) {

            let finalYears = getFinals(fifaData);
        
            const years = finalYears.map(i => i.Year);
            return years;
        };

        function getWinnersByYear(callback1, callback2) {

            let year = getYears();
            let country = getWinners();
            winners = []
        
            for (i = 0; i < year.length; i++) {
                winners.push(year[i], country[i]);
                console.log("In " + winners[i] + ", " + winners[i + 1] + " won the world cup!");
                i += 1;
            };
        }
            
        getWinnersByYear(getWinners, getYears);



/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the
average number of home team goals and away team goals scored per match (Hint: use .reduce and do this
in 2 steps) */

        function getAverageGoals(data) {

            let sumHomeTeamGoals = 0;
            let sumAwayTeamGoals = 0;
            let averageHomeTeamGoals = 0;
            let averageAwayTeamGoals = 0;
            let count = 0;

            for(i = 0; i < data.length; i++) {

                sumHomeTeamGoals = sumHomeTeamGoals + data[i]["Home Team Goals"];
                sumAwayTeamGoals = sumAwayTeamGoals + data[i]["Away Team Goals"];
                count++;
            }
            averageHomeTeamGoals = sumHomeTeamGoals / count;
            averageAwayTeamGoals = sumAwayTeamGoals / count;
            console.log("Average home team goals: " + averageHomeTeamGoals);
            console.log("Average away team goals: " + averageAwayTeamGoals);
        };

        getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials`
and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */+

function getCountryWins(array, initials) {

    let countryMatches = [];    
    let worldCupWins = [];

    for(i = 0; i < array.length; i++) {
        if ((array[i].Stage === "Final") && ((array[i]["Home Team Initials"] || array[i]["Away Team Initials"]) === initials)) {
            countryMatches.push(array[i]);
        };
    };

    // Next task: determine how many "initials" wins in the countryMatches dataset.
};

getCountryWins(fifaData, "GER");


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
