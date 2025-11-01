const newElement = document.createElement("h2");
// console.log(newElement);
newElement.textContent ="Strike is coming";
newElement.id = "second";
// console.log(newElement);

// select element
const element = document.getElementById("first");
element.after(newElement);
// element.before(newElement);
const newElement2 = document.createElement('h3');
newElement2.textContent = "Diwali as rahgi hai ";
newElement2.id = "third";
newElement2.classList.add("diwali");
// newElement2.className = "dewali";
// newElement2.className= "Holi";
 console.log(newElement2);

 "diwaliHoli"
 newElement2.style.backgroundColor ="brown";
 newElement2.style.frontSize = "30px";
 newElement2.setAttribute("hello","ji");

 element.before(newElement2);
 console.log(newElement2.getAttribute("hello"));


//  //before after 
//  const list = document.createElement("li");
//  list.textContent = "Milk"
 
//   const list2 = document.createElement("li");
//  list2.textContent = "Cake"
//   const list3 = document.createElement("li");
//  list3.textContent = "Halwa"

//  const unorderElement = document.getElementById("listing")
//  unorderElement.apped(list);
//  unorderElement.append(list2);
//  unorderElement.prepend(list3);

 const arr = ["Milk","Halwa", "Paneer", "tofu","Tea"];

 const unorderElement = document.getElementById("listing");

 for(let food of arr){
    const list = document.createElement("li");
    list.textcontent = food;
    unorderElement.append(list);
 }

