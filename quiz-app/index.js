const readlineSync = require("readline-sync")
let ready = true
let score = 0
let leaderBoard = []

console.log("\nWelcome to the quiz\n")
let userName = readlineSync.question("Enter your name: ").toLowerCase()
console.log(`\nWelcome to the quiz ${userName}\n`)
console.log("Are you ready to play the game? Yes/No")
let status = readlineSync.question("")
ready = status === "yes" ? true : false

const database = {
    data: [
        {
            question: "Which property best describes a pure function?",
            options: {
                a: "No parameters",
                b: "No side effects",
                c: "Global variables",
                d: "Nested functions"
            },
            correctAnswer: "b"
        },
        {
            question: "Which declaration is fully hoisted?",
            options: {
                a: "Function Declaration",
                b: "Function Expression",
                c: "Arrow Function",
                d: "Class declaration"
            },
            correctAnswer: "a"
        },
        {
            question: "Arrow functions inherit this from the:",
            options: {
                a: "Calling object",
                b: "Global object",
                c: "Lexical scope",
                d: "Parent class"
            },
            correctAnswer: "c"
        }
    ]
}

function showQuestions(database) {
    for (let i = 0; i < database.data.length; i++) {
        console.log(`Q${i+1} : ${database.data[i].question}`)
        for (let key in database.data[i].options) {
            console.log(`${database.data[i].options[key]}`)
        }

        let answer = readlineSync.question("The correct answer is :").toLowerCase()

        if (answer === database.data[i].correctAnswer) {
            score++
            console.log(`\nyay! ${database.data[i].correctAnswer} is the correct answer\n`)
        } else {
            console.log(`\nWrong! the correct is ${database.data[i].correctAnswer}\n`)
        }

        if (i < database.data.length - 1) {
            readlineSync.question("Press enter for the next question : ")
        }
    } // closes for loop
} // closes showQuestions

function showLeaderBoard(userName, score) {
    leaderBoard.push({ name: userName, score: score })
    console.log(leaderBoard)
}

if (!ready) {
    console.log("You are exited")
}

if (ready) {
    showQuestions(database)
    showLeaderBoard(userName, score)
}