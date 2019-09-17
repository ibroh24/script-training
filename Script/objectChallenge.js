var ourStudent = [
    {
        name: 'Uthman Majadtek',
        track: ['FrontEnd development', 'BackEnd Development'],
        achievement: 5,
        point: 200
    },
    {
        name: 'Abdillah Sulayman',
        track: ['C#', 'JavaScript', 'HTML', 'CSS'],
        achievement: 4,
        point: 100
    },
    {
        name: 'Omar Sulayman',
        track: ['Web Development', 'JavaScript', '.Net Frameworks'],
        achievement: 5,
        point: 150
    },
    {
        name: 'Dr. Yasir Quadri',
        track: ['Adventure of Islam', 'Prophetic Medicine', 'The Seal Nectar'],
        achievement: 10,
        point: 250
    },
    {
        name: 'Ibrahim Hammed',
        track: ['C#', 'JavaScript', 'PHP', 'NodeJs'],
        achievement: 4,
        point: 100
    }
]
var message
console.log(ourStudent);
// for(var i = 0; i<ourStudent.length; i++){
//     var message = '<p><b>Student: '+ourStudent[i].name+ '</b></p>';
//     message += '<p>Track: '+ourStudent[i].track.join(', ')+ '</p>';
//     message += '<p>Achievement: '+ourStudent[i].achievement+ '</p>';
//     message += '<p>Points: '+ourStudent[i].point+ '</p>';
//     message += '<br>';
//     document.write(JSON.stringify(message));
// }

var userInput = prompt("Search for any Student Record in our System, Type Quit to exit or type all to view all records");
userInput.toLowerCase();
do {
    if(userInput ==='quit'){
        break;
    }else if(userInput ==='all'){
        for(var i = 0; i<ourStudent.length; i++){
            message = '<p><b>Student: '+ourStudent[i].name+ '</b></p>';
            message += '<p>Track: '+ourStudent[i].track.join(', ')+ '</p>';
            message += '<p>Achievement: '+ourStudent[i].achievement+ '</p>';
            message += '<p>Points: '+ourStudent[i].point+ '</p>';
            message += '<br>';
            document.write(JSON.stringify(message));
        }
        break;
    }else{
        if(userInput === ourStudent[i].name){
            message = '<p><b>Student: '+ourStudent[i].name+ '</b></p>';
            message += '<p>Track: '+ourStudent[i].track.join(', ')+ '</p>';
            message += '<p>Achievement: '+ourStudent[i].achievement+ '</p>';
            message += '<p>Points: '+ourStudent[i].point+ '</p>';
            message += '<br>';
            document.write(JSON.stringify(message));
            break;
        }
    }
    
} while (true);
