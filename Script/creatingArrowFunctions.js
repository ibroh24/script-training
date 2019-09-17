// starting with arrow functions
var name = 'Andrew'

// declaration function
function sayHello() {
    return console.log('Hello '+name );
}

// arrow function
const sayHi = () => console.log('Hi '+ name);

// arrow functions with argument
const square = x => console.log(x * x);

const cube = x => console.log(square(x) * x);

cube(4);
square(2);
sayHello();
sayHi();