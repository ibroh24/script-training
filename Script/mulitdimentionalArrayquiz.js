var quizQuestionAndAnswers = [
    ['How many head does hydra snake has?', 2],
    ['How many state are there in Nigeria?', 36],
    ['How many legs does milipede has?', 100]
];

var correct = 0;
var questions;
var answers;
var userInput;
for (var i = 0; i < quizQuestionAndAnswers.length; i++) {
    questions = quizQuestionAndAnswers[i][0];
    answers = quizQuestionAndAnswers[i][1];
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

