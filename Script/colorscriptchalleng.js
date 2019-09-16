// dry code challenge

var html = '';
var green;
var red;
var blue;
var rgbColor;

// red = Math.floor(Math.random()* 256);
// green = Math.floor(Math.random()* 256);
// blue = Math.floor(Math.random()* 256);
// rgbColor = 'rgb('+ red + ', '+ green + ', '+blue+ ')';
// html = '<div style="background-color:'+ rgbColor+ '"></div>';
// document.write(html);
console.log(html);
function getRandomColor(values) {
    return Math.floor(Math.random()* values);
}

for (var i = 0; i < 10; i++) {
    red = getRandomColor(256);
    green = getRandomColor(256);
    blue = getRandomColor(256);
    rgbColor = 'rgb('+ red + ', '+ green + ', '+blue+ ')';
    html += '<div style="background-color:'+ rgbColor+ '"></div>';
}
document.write(html);