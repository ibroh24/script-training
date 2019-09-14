/* 
    getting user input and change the questions left number...
var message = 3;

var name = prompt("What is your name? "+ "You have "+ message +" left");

message -= 1;
var age = prompt("How old are you? "+ "You have "+ message +" left");
message -= 1;
var address = prompt("Where is your state? "+ "You have "+ message +" left");   */

// console.log("Thanks for your patience, your name is "+name+ " and your age is "+age+ " and you are from "+address);

/*
var firstInput = prompt("Please enter a number: ");
var secondInput = prompt("please enter another number: ");

var result = Math.floor(Math.random() * parseInt(firstInput) +1);
alert("Here is the random number of your first number: "+ result);

var result = Math.random(parseInt(secondInput));
alert("and this is the random number of your second input: "+ result);  */

// guessing game
/* var randomNum = Math.floor(Math.random() * 6 + 1);
var userInput = prompt("Guess a number between 1 - 6: ");
// var tryNum = 5;
// for (let i = 0; i < tryNum; i++) {
if (randomNum === parseInt(userInput)) {
    alert("You are right, your guess number is "+ userInput+ " and correct value is "+randomNum);    
} else if (randomNum > parseInt(userInput)) {
    var tryagain = prompt("your guess number is "+ userInput+ " less than the value, try again");    
    if (randomNum === parseInt(tryagain)) {
        alert("You are right, your guess number is right this time "+ tryagain+ " and correct value is "+randomNum);    
    }else{
        alert("Oh!, You are wrong, your guess number is "+ userInput+ " and correct value is "+randomNum);           
    }
}
else {
    alert("You are wrong, your guess number is "+ userInput+ " and correct value is "+randomNum);       

}
        */

// quiz challenge
var section = 4;
/*
var question1 = prompt("What is the name of Nigeria President? [You have "+section +" more questions to answer.]");
section -= 1;
var question2 = prompt("What is the name of oyo state governor? [You have "+section +" more questions to answer.]");
section -= 1;
var question3 = prompt("How many days are in september? [You have "+section +" more questions to answer.]");
section -= 1;
var question4 = prompt("Muslim pray where? [You have "+section +" more questions to answer.]");
section -= 1;
var question5 = prompt("Is html a programing language? [Last questions to answer.]");

if(question1.toLowerCase() === 'buhari' && question2.toLowerCase() ==='seyi makinde' || question2.toLowerCase() ==='makinde' && question3 == 30 && question4.toLowerCase()=== 'masjid' || question4.toLowerCase() ==='mosque' && question5.toLowerCase() === 'no'){
    alert("You got all the question, you won a gold medal!");
}else if(question1.toLowerCase() === 'buhari' && question2.toLowerCase() ==='seyi makinde' || question2.toLowerCase() ==='makinde'){
    if (question3 !=30  && question4.toLowerCase()=== 'masjid' || question4.toLowerCase() ==='mosque' && question5.toLowerCase() === 'no') {
        alert("You got 4 out of 5 question, you won a silver medal!");
    } else {
        
    }
}  
    
*/


// making computer to guess random number

function getRandomNumber(num){
    return Math.floor(Math.random() * num) + 1;
}
var number = 100;
var randomNum = getRandomNumber(number);
var computerGuess;
var guessCounter = 0;

// while (computerGuess !== randomNum) {
//     computerGuess = getRandomNumber(number);
//     guessCounter +=1;
// }

//alert("Computer matches at "+ guessCounter +" times and the random number is "+ randomNum);


