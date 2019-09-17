var quizQuestionAndAnswers = [
    {
        questions: 'How many head does hydra snake has?',
        answers: 2
    },
    {
        questions: 'How many state are there in Nigeria?',
        answers: 36
    },
    {
        questions: 'How many legs does milipede has?',
        answers: 100
    }
];

var correct = 0;
var questions;
var answers;
var userInput;
for (var i = 0; i < quizQuestionAndAnswers.length; i++) {
    questions = quizQuestionAndAnswers[i].questions;
    answers = quizQuestionAndAnswers[i].answers;
    userInput = parseInt(prompt(questions));
    if (userInput === answers){
        correct +=1;
    }
}
printResult('You got ' + (correct ? 'all' : 'some') + ' questions correctly, you scored '+correct+ '/'+ quizQuestionAndAnswers.length);
// document.write('You got ' + (correct ? 'all' : 'some') + ' questions correctly, you scored '+correct+ '/'+ quizQuestionAndAnswers.length);

function printResult(message) {
    var testOut = document.getElementById('output');
    testOut.innerHTML = message;

}

