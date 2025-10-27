//  object
// key value
// const user = {
//     name:"Charlie",
//     age:20,
//     emailID : "charlie42@gmail.com",
//     amount:3400,
//     "home address" : "Dwarka "
// }
// const user2 = user;
// user2.name = "Sam";

// important 
// console.log(Object.keys(user));
// console.log(Object.values(user));
//console.log(Object.entries(user));
//console.log(user);dw
// console.log(typeof user);
// console.log(user.age);

// CRUD operator : create read update delete

// user.aadhar = 1234;
// user.amount = 5000;
// console.log(user);

// delete 
// delete user.emailID;
// console.log(user);

// console.log(user["name"]);
// console.log(user2);

// for(let keys in user ){
// console.log(keys, user[keys]);
// }

// user.keys case me user me value dhundega es liye ham users[keys] used karte h..
// const user = {
//     name:"Charlie",
//     age:20,
    // emailID : "charlie42@gmail.com",
    // amount:3400,
    // "home address" : "Dwarka ",
//     greeting: function(){
//      console.log(`Strike is coming on 18 october by ${this.name}`);
//      return 20;
//     }
// }
// const user2 ={
//     name: "Manti",
//     age: 34,
//     greeting: function(){
//      console.log(`Strike is coming on 18 october by ${this.name}`);
//      return 20;
//     }

// }
// //user2.greeting = user.greeting;
//  user2.greeting();
// console.log(user2);
// const va = user.greeting();
// console.log(va);

// const name = user.name;
// const age = user.age;   // ye sahi tarika nhi hai 

// console.log(name,age);
// const {name : userName, age: userAge}= user;
// // console.log(name, age);
// const arr = [10, 30,20, 40,90];
// const [first,second]= arr;

//console.log(first , second);
// console.log(userName,userAge);

// For a loop array ke 
// const temparr = Object.keys(user);
// console.log(temparr);
// for(let keys of Object.keys(user)){
// console.log(keys);
// }
// for(let keys of Object.entries(user)){
//     console.log(keys);
// }
// for(let [keys,values] of Object.entries(user)){
//     console.log(keys, values);
// }

// nested object
const user1  = {
    name:"Ram",
    age:21,
    email: 'ram12@gmail.com',
    address :{
      city: `Ballia `,
      state:`Uttar Pardesh`
    }
}

// shallow copy
// console.log(user1.address.state);
// const user2={...user1};
// user2.name = `Karl`;
// user2.email =`karl12@gmail.com`
// user2.address.city = `Sagarpali`
// console.log(user2);
// console.log(user1);
// Deep copy
// const user2 = structuredClone(user1);
// user2.name = `Shyam`;
// user2.address.city = "Dwarka";
// console.log(user2);
// console.log(user1);

// const arr = [10, 20 ,30 , 40];
// const sym = Symbol("id");
// const user={
//     name:`Sanjana`,
//     age:20,
//     0:100,
//     1:"Queen",
//     [sym]:`Hello World`
// }
// console.log(user[sym]);
let obj1 = { value: 10 };
let obj2 = obj1; // Copies the reference, NOT the object.

obj2.value = 20; // Mutates the single object.

console.log(obj1.value); // 20 (The original was changed!)
