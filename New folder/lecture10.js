// scope and closure , HDF
// Global -> Accessible to everyone
// functional -> accesible only to that function
// Block level scope ->accesible only to that Block

// let a = 10;
// const b=20;
// var e = 80;

// if(true){
//    // let d = 50;
//     console.log(e);

// }

//console.log(d);
// function greet(){
//     let global = 30;   // ye varible ka scope bs function tk hi hai 
//     function meet(){
//        let global = 10;
//         console.log(global);
//     }
//     meet();
// }
// //console.log(c);
// greet();

// function createcounter(){
//     function increment(){
//         console.log("I am increment function");
//     }
//     return increment;
// }
// const count = createcounter();
// console.log(count());

// count();

// var give respect to global and function but not to block

// let global = 30;
// function greet(){
//     let global = 40;  // 
//     function meet(){
//         let global = 10;
//     console.log(global);
//     }
//     meet();
// }
// greet();

// function createcounter(){
//      let count = 0;
//     function increment(){
//         count++;
//        return count;
     
//     }
//     return increment;


// const counter = createcounter();
// // console.log(count);
// // counter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let balance = 500;



// balance +="Sam";
// // balance-=500;
// console.log(balance);


// function createBankAccount(){

// let balance = 500;
// return {
    
//     deposit: function(amount){
//         if(typeof amount==="number"&& amount>0){
//         balance+=amount;
//       return balance;
//     }
// },
 
//     withdraw: function(amount){
//         if(typeof amount==="number"&& amount>0 && balance>=amount){
//         balance-=amount;
//       return balance;
//     }
// },
// getbalance: function(){
//     return balance;
// }

// }

// }
// console.log(user.getbalance());
//  console.log(user.deposit("sam"));
// const customer = createBankAccount();
// console.log(customer.deposit(200));
// console.log(customer.withdraw(200));
// console.log(customer.getbalance);

// Higher Order function

function double(value){

   return function execute(num){
    return num+value
}
}
const n = double(20)(5);
// n();
console.log(n);