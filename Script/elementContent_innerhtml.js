// getting more with queryselector to change values and headings

const toggle = document.querySelector('.toggle');
const input = document.querySelector('input');
const h1Value = document.querySelector('h1.tags');
const btn = document.getElementById('myButton2');

const addListInput = document.getElementById('addListInput');
const addListButton = document.getElementById('addListButton');
const removeListButton = document.getElementById('removeListButton');


// this function is used to add element to ul 
addListButton.addEventListener('click', ()=>{
    let ul = document.getElementById('myUl');
    let li = document.createElement('li');
    li.textContent = addListInput.value;
    ul.appendChild(li);
    addListInput.value = '';
});


// and this is used to remove last element from the ul
removeListButton.addEventListener('click', ()=>{
    let ul = document.getElementById('myUl');
    let li = document.querySelector('li:last-child');
    // li.textContent = addListInput.value;
    ul.removeChild(li);
});


btn.addEventListener('click', ()=>{
    if(toggle.style.display == 'none'){
        btn.textContent = 'Hide Toggle List';
        toggle.style.display = 'block';
    }else{
        btn.textContent = 'Show Toggle List';
        toggle.style.display = 'none';
    }

    
});

// const goods = document.getElementById('good');
// const sold = document.getElementById('sold');
// const total = document.getElementById('total');

// sold.addEventListener('mouseleave', ()=>{
//     if(total !== NaN)
//     total.value = parseFloat(goods.value) + parseFloat(sold.value);
// });

