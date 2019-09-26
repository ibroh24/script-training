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

// window.setTimeout((myfuncName) =>{
//     prompt("Are you not liking this?")
// }, 8000, 'just tell me');


// adding event listener with moveover and mouseout event

// const li = document.getElementsByTagName('li');

// for (let i = 0; i < li.length; i++) {
//     li[i].addEventListener('mouseover', ()=>{
//         li[i].textContent = li[i].textContent.toUpperCase();
//     });  
//     li[i].addEventListener('mouseout', ()=>{
//         li[i].textContent = li[i].textContent.toLowerCase();
//     });  
    
// }

const listDiv = document.getElementById('myUl');
listDiv.addEventListener('mousemove', (event) =>{
    event.target.textContent = event.target.textContent.toUpperCase();
})