// getting more with queryselector to change values and headings

const input = document.querySelector('input');
const h1Value = document.querySelector('h1.tags');
const btn = document.getElementById('myButton2');

btn.addEventListener('click', ()=>{
    h1Value.textContent = input.value;
});

