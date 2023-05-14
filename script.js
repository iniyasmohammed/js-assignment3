var readlineSync = require("readline-sync");

//recognise a number odd or even
let num = readlineSync.question("enter a number:");
if(num%2==1){
    console.log("the number you entered is an ODD numner");
}else{
    console.log("the number you ordered is an EVEN number");
}

//program for printing multiplicartion table
let x = readlineSync.question("enter a numer to make a multiplication table with 10 lines : ")
for(let i=1;i<=10;i++){
    console.log(i+"*"+x+"="+i*x);
}

// number to represent a weekday
let day = readlineSync.question("enter the day in week : ");
if(day==1){
    console.log("its MONDAY");
}else if(day==2){
    console.log("its TUESDAY");
}else if(day==3){
    console.log("its WEDNESDAY");
}else if(day==4){
    console.log("its THURSDAY");
}else if(day==5){
    console.log("its FRIDAY");
}else if(day==6){
    console.log("its SATURDAY");
}else if(day==7){
    console.log("its SUNDAY");
}else{
    console.log("enter a valid number");
}
    