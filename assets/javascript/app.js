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

$("#start").on("click", run);

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

run();

//$("#start").on("click", function(),
for(var i = 0; i < allQuestions.length; i++) {
    $("#questions").html(allQuestions[0].question);
}

//$("#questions").html(allQuestions[0].picture);
// for loop. $("#questions").text(allQuestions[0].answerChoices);
