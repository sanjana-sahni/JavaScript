
//user2.greeting = user.greeting;
 user2 : user.greeting();
console.log(user2);
const va = user.greeting();
console.log(va);
const arr = [10,30,50,80,22];
const arr2 = ["Rohit",11,true];
const arr4 = [90,false,'Harry'];
// const arr3 =arr.concat( arr2,arr4);
// const arr3 =[arr, arr2, arr4];
const arr3 = [...arr,...arr2,...arr4];
console.log(arr3);
