var allQuestions = [

    {
        question: "Antelope Canyon is in which state?",
        answerChoices: ["Colorado",
            "Nevada",
            "Arizona",
            "Utah"
        ],
        picture: "assets/images/antelope.png",
        correctIndex: 3,
        correctAnswer: "Arizona",
    },

    {
        question: "Arches National Park is in which state?",
        answerChoices: ["Montana",
            "Utah",
            "Illinois",
            "Nebraska"
        ],
        correctIndex: 2,
        correctAnswer: "Utah"
    }, {
        question: "What is Florida's nickname?",
        answerChoices: ["Panhandle State",
            "Ocean State",
            "Orange County",
            "Sunshine State"
        ],
        correctIndex: 4,
        correctAnswer: "Sunshine State"
    }, {
        question: "The Channel Islands are part of which state?",
        answerChoices: ["California",
            "Hawaii",
            "Florida",
            "Alaska"
        ],
        correctIndex: 1,
        correctAnswer: "California"

    }
]

var number = 60;

var intervalId;

//var slowTimer = false;
//if(!slowTimer) {
// intervalId = setInterval(number.count, 1000);
//}

$("#start").on("click", function() {
    run();
    //move stuff in here
});

function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {

    number--;

    $("#time").html("Time Remaining: " + number);

    if(number === 0) {

        stop();

        alert("Time Up!");
    }
}

function stop() {

    clearInterval(intervalId);
}

var counter = 0

//$("#start").on("click", function(),


$("#questions").html(allQuestions[counter].question);

for(var i = 0; i < allQuestions[counter].answerChoices.length; i++) {

    $("#questions").append("<p class = 'click'>" + allQuestions[counter].answerChoices[i].toString() + "</p>");
}

function runGame() {

    counter++;

    $("#questions").html(allQuestions[counter].question);

    for(var i = 0; i < allQuestions[counter].answerChoices.length; i++) {
        $("#questions").append("<p class = 'click'>" + allQuestions[counter].answerChoices[i].toString() + "</p>");
    }
}

$(document).on("click", ".click", function() {

    if(allQuestions[counter].correctIndex === 3) {
        $("#questions").html(allQuestions[counter].correctAnswer);
    }
    else {
        alert("Wrong!");
    }
    runGame();
});


//$("#questions").html(allQuestions[0].picture);
// for loop. $("#questions").text(allQuestions[0].answerChoices);
