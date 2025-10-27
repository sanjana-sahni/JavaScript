// ARRAY
// const arr = [10 , 20 ,25,"Sam",'Ron'] ;
// console.log(arr);

// const arr1 = [90 ,30, 40 , [10,25 ,[15,5],35],50, [ 22,33]];
// // console.log(arr1[3][2][1]);
//  const a = arr1.flat(2);
// console.log(a);

const x = [5, 25,"Sam",9.3,true];
x.name ="Arav";
console.log(x);
// let marks= [90,80,70,75,85];
// marks[1]= 20;

// // console.log(typeof marks);

// // use push operator to add other elements from end 
// marks.push(30);
// console.log(marks);

// // pop operation: delete from end 
//  marks.pop();
//  console.log(marks);

// let arr = [10, 30,'petter','harry',45];
// arr.unshift(10);  // esme front se add ho raha hai
// // console.log(arr);

// // delete kar sakta hu 
// arr.shift();    // but esse performance kharb hota h..
// console.log(arr);

// let arr = [10,30,50,80,22];
// for(let i =0;i<5;i++){
//     console.log(arr[i]);
// }

// for(let num of arr){
//     console.log(num);
// }

// Objection Primitive : copy by reference hote hai
// Primitive : copy by value

// let arr2 = arr;
// arr2.push(30);
// console.log(arr);
 
//  let arr = [10,30,50,80,22];
//  const arr2 = arr.slice(2,4);
//  console.log(arr2);
// //  arr.splice(1,3);
//  console.log(arr.splice(1,3));
//  console.log(arr);

// const arr = [10,30,50,80,22];
// const arr2 = ["Rohit",11,true];
// const arr4 = [90,false,'Harry'];
// const arr3 =arr.concat( arr2,arr4);
// const arr3 =[arr, arr2, arr4];
// const arr3 = [...arr,...arr2,...arr4];
// console.log(arr3);

// const names = ["Alice","Rohit","Harry","Bob","Ron"];
// names.sort();
// names.reverse();
// console.log(names);

// const a = [ 101,90,80,32,21];  // jS me rules hai ki string ke base par hi data sort hoga kyo ki esme different type ka data store hota h..
// const b = [10, "Ram",true,0,40];  // esme data ascii value ke acorrding arrange hote hai
// a.sort();
// console.log(a);

// const arr = [10,40,31,71,5,11];
// ascending ke liye 
// arr.sort((a,b)=>a-b);
// console.log(arr);
// descending ke liye 
// arr.sort((a,b)=>b-a);
// console.log(arr);
// -ve : pehle a aayega fir b aayega 
// +ve : b aayega fir a aayega


