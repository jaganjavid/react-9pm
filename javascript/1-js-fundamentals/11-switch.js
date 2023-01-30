const color = "sadasd";


switch(color){
    case 'red': 
        console.log("color is red");
        break;
    case 'blue':
        console.log("color is blue")
        break;
    default :
        console.log('color is not red or blue');
}

let day;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

switch (new Date().getDay()){
    case 0 :
        day = weekday[0];
        break;
    case 1 :
        day = weekday[1];
        break;
    case 2 :
        day = weekday[2];
        break;
    case 3 :
        day = weekday[3];
        break;
    case 4 :
        day = weekday[4];
        break;
    case 5 :
        day = weekday[5];
        break;
    case 6 :
        day = weekday[6];
        break;
}

console.log(`Today is ${day}`);
