var cartList = [
    ['bread', 'For Toasting'], 
    ['butter', 'For Cakes'],
    ['egg', 'For Yam Lover'],
    ['cream', 'And Icing Sugar'],
    ['biscuit', 'For Little Ones'],
    ['gala', 'To get it done in lag :)']
];

// function to populate all items in an array
function itemList(list) {
    var htmlList = '<ol>';
    for(var i = 0; i<list.length; i++){
        htmlList += '<li>' + list[i] + '</li>';
    }
    htmlList += '</ol>';
    document.write(htmlList);
}

//itemList(cartList);

// function to search items in an array
// function searchItems(list) {
//     var itemList = 0;
//     // var cartList = ['breed', 'butter', 'egg', 'cream', 'biscuit', 'gala'];
//     var userSearch = prompt("Search what you need in our store, type exit to quit or type all to see all items");
//     if(userSearch.toLowerCase() ==='exit'){
//         return document.write("you exit the search <br>");
//     }else if(userSearch.toLowerCase() === userSearch.indexOf(list)){
//         // if()
//         return document.write('We have '+ indexOf(list)+ ' that you asked for.');
//     }else if(userSearch.toLowerCase==='all'){
//         for (var i = 1; i < list.length; i++) {
//             itemList += list[i];
//             document.write(itemList.join(','));
            
//         }
//     }else if(userSearch ===''){
//         prompt("Please search what you need");
//     }
// }
// console.log(cartList);
// var getUserInput = searchItems(cartList);
// console.log(searchItems(cartList[0]))
// document.write(getUserInput);


var userSearch = prompt("Please, search for items in the stock, type exit to quit or type list to see all items");

while (true) {
    userSearch = userSearch.toLowerCase();
    if(userSearch ==='exit'){
        document.write('You quit the search');
        break;
    }else if(userSearch ==='all'){
        // document.write(cartList.join(','));
        document.write(cartList);
        break;
    }else{
        if(userSearch.indexOf(cartList)){
            document.write("We have "+userSearch+'<br>');
            break;
        }else{
            document.write("We dont have "+ userSearch+ " in stock");
            break;
        }
    }
    
}
document.write(cartList[5][1]);