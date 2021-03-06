//array containing objects
var allQuestions = [

    {
        question: "Antelope Canyon is in which state?",
        answerChoices: ["Colorado",
            "Nevada",
            "Arizona",
            "Utah"
        ],
        picture: "<img src= 'assets/images/antelope.png'>",
        correctIndex: "2",
        correctAnswer: "Arizona",
    },

    {
        question: "Arches National Park is in which state?",
        answerChoices: ["Montana",
            "Utah",
            "Illinois",
            "Nebraska"
        ],
        picture: "<img src= 'assets/images/arches.png'>",
        correctIndex: "1",
        correctAnswer: "Utah"
    }, {
        question: "What is Florida's nickname?",
        answerChoices: ["Panhandle State",
            "Ocean State",
            "Orange County",
            "Sunshine State"
        ],
        picture: "<img src= 'assets/images/miami.png'>",
        correctIndex: "3",
        correctAnswer: "Sunshine State"
    }, {
        question: "The Channel Islands are part of which state?",
        answerChoices: ["California",
            "Hawaii",
            "Florida",
            "Alaska"
        ],
        picture: "<img src= 'assets/images/cali.png'>",
        correctIndex: "0",
        correctAnswer: "California"

    }
]

//start timer
var number = 40;

var intervalId;

var wins = 0;
var losses = 0;
var unanswered = 0;

//var slowTimer = false;
//if(!slowTimer) {
// intervalId = setInterval(number.count, 1000);
//}


//start the game when user clicks start button
//run the function that starts timer and shows first question + answerChoices

$("#start").on("click", function() {
    run();
    //move stuff in here
});

function run() {
    intervalId = setInterval(decrement, 1000);

    showCurrentQuestion();
}

function decrement() {

    number--;
    number >= 0;

    $("#time").html("Time Remaining: " + number);

    if(number === 0) {

        stop();

        updateScore();
    }
}

function stop() {

    clearInterval(intervalId);
}

//setting counter to refer to each object (question set) in the array
var counter = 0

//$("#start").on("click", function(),

//running the first question set with answer choices
//$("#questions").html(allQuestions[counter].question);

//for(var i = 0; i < allQuestions[counter].answerChoices.length; i++) {

//  $("#questions").append("<p class = 'click'>" + allQuestions[counter].answerChoices[i].toString() + "</p>");
//}

//set a function loop to show the next question and subsequent questions.
function showCurrentQuestion() {

    $("#questions").html(allQuestions[counter].question);

    for(var i = 0; i < allQuestions[counter].answerChoices.length; i++) {
        $("#questions").append("<button class = 'button' value= '" + i + "' >" + i + allQuestions[counter].answerChoices[i].toString() + "</button>");
    }
}
//figure out which answer user clicked

// when timer = 0
function timeUp() {
    if(number === 0) {
        updateScore();
        stop();
    }
}

var userGuess;

$(document).ready(function() {
    $(document).on("click", ".button", function() {
        userGuess = $(this).attr('value'); // add value to array

        console.log("User guessed: '" + userGuess + "'");
        console.log("Expected: '" + allQuestions[counter].correctIndex + "'");

        // this MUST happen for every click, not just one time
        if(allQuestions[counter].correctIndex === userGuess) {
            $("#questions").html(allQuestions[counter].correctAnswer);
            $("#questions").append(allQuestions[counter].picture);
            wins++;
        }
        else {
            alert("Wrong!");
            $("#questions").html(allQuestions[counter].correctAnswer);
            $("#questions").append(allQuestions[counter].picture);

            losses++;
        }

        timeUp();

        setTimeout(showCurrentQuestion, 1000 * 2);

        counter++;

    });
});






function updateScore() {
    $("#score").text("Wins: " + wins + "Losses: " + losses + "Unanswered: " + unanswered)

}

//
//setTimeout(twoSeconds, 1000 * 2);

//function twoSeconds() {
//   $("#time-left").append("game over")



//$("#questions").html(allQuestions[0].picture);
// for loop. $("#questions").text(allQuestions[0].answerChoices);
