// Function 
// function greeting(){
//     console.log(`Strike is coming on 18th oct.`);
//     return 10;
// }
// console.log(greeting);
// console.log(greeting());
// function addNumber( num1, num2,num3=0,){

//     const sum = num1+num2+num3;
//     console.log(sum);

// }
// addNumber(2,4);
// addNumber(3,4,5);

// when parameters are not know that how many num to be add

// rest operator
// function addNumber(...num){

//     let sum =0;
//     for(let n of num){
//         sum+=n;

//     }
//     console.log(sum);
// }


// addNumber(9,8,7,6,5,12,3,2,1,23,45,5);
// addNumber(1,2,3,9);

// const arr = [10, 20,30,40,50];
// const arr2 = [30,70,90,10];
// const ans =[...arr,...arr2];
// console.log(ans);

//  const arr = [10, 20,30,40,50];
//  const [first, second,...num]= arr;
//  console.log(first,second, num);

// Another way to call function

// const addNumber = function(num1,num2){
//     return num1+num2;
// }
// console.log(addNumber);

// difference blw two way of call function 

// console.log(addNumber(3,6));
//  function addNumber(num1,num2){
//     return num1+num2;
// }

// let arr = [10,20,5,40,15];
// arr.sort((a,b)=>a-b);  // ye allow function hai 
// console.log(arr);

// const addNumber = (num1, num2)=>num1+num2;

// const square = num =>(num*num);
// console.log(addNumber (3,4));
// console.log(square (6));
//  const greeting = ()=>{
//     let user ={
//         name : "Raw",
//         age: 21
//     }
//     return user;
//  }
//  console.log(greeting());

//  const greeting = ()=> ({name : "Raw", age: 21})
//    console.log(greeting());

// IIFE

// (function greeting(){
//     console.log("Hello ji")
// })();
                     
// ( ()=>{
//     console.log("Hi");
// })();

// function greet(){
//     console.log("Hello Ji, Kaise ho")

// }
// function dance(){
//     console.log("Dance stdio me huaa")
// }
// function meet(callback){  // esme ham chate h.. pahle greet fun call ho phir meet
//     console.log("I am going to meet someone");
//     callback();
//     console.log("I want to give my audition");
    
// }
// meet(greet);
// meet(dance);

// real example 

function zomatoToOrderPlace(){
    console.log("We have started to preparing your order");
}
function blinkitToOrder(){
    console.log("We have started to pack your order");
}
function payment(amount,callback){
    console.log(`${amount} payment has initilized.`);
    console.log("Payment is received .");
    callback();
}
payment(500,zomatoToOrderPlace);
payment(300,blinkitToOrder);