var person = {
    name: 'Hammed Ibrahim',
    job: 'Software Developer',
    age: 30,
    stack: ['PHP', 'C#.Net', 'Javascript']
}

function getPrint(note) {
    var check = document.getElementById('output');
    check.innerHTML = note;
}

var message = '<p>My name is '+person.name+ ' and am just '+person.age+ 'years old </p>';
person.country = 'Nigeria';
message += '<p>I lived in '+person.country+ ' and am a '+person.job+'</p>'
message += '<p>My stack are '+person.stack.length+' Namely: '+person.stack.join(', ')+'</p>'
getPrint(message);

for (var key in person) {
    console.log(key, ':', person[key]);
}