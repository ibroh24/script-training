const heading = document.getElementById('myHeading');
const mytext = document.getElementById('mytext');
const button = document.getElementById('myButton');
const btn2 = document.getElementById('myButton2');

button.addEventListener('click', ()=>{
    heading.style.color = mytext.value;
    heading.style.backgroundColor = 'green';
})

btn2.addEventListener('click', () => {
    confirm("Heading reset?");
    heading.style.color = 'black';
    heading.style.backgroundColor = 'white';
    
})