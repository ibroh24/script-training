alert(window.navigator.language);
alert(window.navigator.appName);
alert(window.navigator.appVersion);
alert(window.navigator.cookieEnabled);
window.print();
clearInterval(20);
clearTimeout(10);
// close("close down");
alert(window.navigator.platform);
alert(window.navigator.userAgent);
if(window.navigator.userAgent == "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"){
    window.location = "https://www.google.com";
}

function adFunction(){
    var popupMessage = window.open("/secondpage.html", "popup", "toolbar, menubar");

}
//document.write(window.screen.height);
// window.location = "google.com";

function getFunctionUsages(val){
var val = {
    "Human": "Ibrahim",
    "Plant": "Maize",
    "Animal" : "Dog",
    "Things": "Bag"
}
    return val;
}

// console.log(getFunctionUsages.tryObjects(Human));


function caseStatement(Education){
    var checkNum = "";
    switch (Education){
        case "School":
        checkNum = "Blazzer School";
        break;
        case "College":
        checkNum = "Yaba College of Technology";
        break;
        case "PHD":
        checkNum = "University of Ibadan";
        break;
        default:
        checkNum = "Select good Option";
        break;
    }
    return checkNum;
}

console.log(caseStatement("PHD"));

function checkIfState(idea){
    var condition;
    if (idea <= 10){
        condition = "You re not allowed here";
    }else if(idea > 10 && idea <= 20){
        condition = "come back when youre 21!";
    }else if (idea >20 && idea <=30){
        condition = "Your stay here is limited!";
    }else if(idea >30){
        condition = "You are fully allowed";
    }else{
        condition  = "Insert right number!";
    }
    return condition;
}

console.log("When input btn 1 to 10: "+ checkIfState(9));
console.log("When input btn 11 to 20: "+ checkIfState(18));
console.log("When input btn 21 to 30: "+ checkIfState(22));
console.log("When input 30 and above: "+ checkIfState(33));
console.log("When input btn non number: "+ checkIfState("Val"));


function checkNoReturn(){
    var a = 30;
    var b = 22;
    var c = 10;
    c += b;
    signal = a + c;
    console.log(signal);
}
checkNoReturn();

// function checkObject(){
    var myObj = {
    "Human": "Ibrahim",
    "Plant": "Maize",
    "Animal" : "Dog",
    "Things": "Bag"
    };
    
// }
var myObject = myObj.Animal;