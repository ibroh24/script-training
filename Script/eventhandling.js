// function declaration 
function letTryThis(greetings){
    console.log("Hello "+greetings);
    alert("Am really happing to see this!!! "+ greetings);
}

// letTryThis('Ibrahim');

// function accepting functions and argument
function tryWithFuncArgs(func, arg){
    // then call func (functions and pass args as argument)
    func(arg);
}

// calling the tryWthFuncArgs and pass another function into it ie lettrythis functions
// tryWithFuncArgs(letTryThis, 'believe, it works');

// however, a function can be written directly inside another function when calling
tryWithFuncArgs((greetings) => {
    console.log("Hello "+greetings);
}, 'this also works') ;

// trying to call the set-timer functions and call another funtion to execute in it

window.setTimeout((letTryThis), 5000, 'Alhamdulilah');