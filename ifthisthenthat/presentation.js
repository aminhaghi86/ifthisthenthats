//present js fun and api
//  at first we implement our application that only works for us(spaghetti code),then
//  we should use more function to give it more structure and don't repeat too much lines
//  when we use functions it means that only call the function whereever we need
//  it should to be readble for everyone,
//  after that we split our functions or  data out into some javascipt file and use import and export
//  use semicolons;
//  use prettier extension to sort our code
//  use camelcase and good name for variables and functions
const firstName = "Amin"; //<- can not change value 
const lastName = "Haghi";
let counter = 10
/////
let a = 10; // <global scope
function printFunc() {
  let b = 10; //<local scope
  alert(b)
}
printFunc();

// // if conditions
// we use if to specify a block of code to be executed and compare,
//  and returns us boolean (t , f -> else and else if...)
const c=Number(prompt('enter number'));  
if(c>10){
    console.log('greater');
  }else {
    console.log('smaller or equal');
  }
// use state --
// when you change you have to update html aslo to see latest changes DOM MANUPULATION 
 // instead of repeating some codes,we call function when we need it
function runGame() {
  let guessNumber = Number(prompt("Please Guess the number between 1 to 100"));
  if (guessNumber != "" && guessNumber !== null) {
    if (guessNumber === originalNum) {
       
      render(guessNumber, "green",' is correct!!');
      setTimeout(resetGame, 2000);
    } else if (guessNumber < originalNum) {
      render(guessNumber, "yellow",' is smaller than real number');
    } else if (guessNumber > originalNum) {
     
      render(guessNumber, "red",' is greater than real number');
    }
  } else {
    alert("please enter number :)");
  }
}

const render = (num, color,status) => {
  resEl.innerHTML = `${num}${status}`;
  resEl.style.color = color;
};
//  we have 2 ways to build function in js,both of them are the same
// first we have to type function key and then one name for a function, () and {}
function operation()  /* or arrow function */ const operation = () => {};

// when we create function,we have to call it each place that we need.

// Functions are useful because we can reuse them.
operation();

  //// An object is filled with key value pairs , together they're called property!
  //  for example person is a one object and we can store all property of person into one object
  //we can store strings,numbers,booleans,arrays and functions into an object
  const person = {
      
    name: "amin",
    family: "haghi",
    age: 36,
    alive: true,
    email: "aminhaghi@gmail.com",
     study() {
      console.log(`I'm studying Frontend developer at Hyper Island`);
    },
  };
  console.log(person.name);
  console.log(person.family);
  console.log(person.age);
  console.log(person.alive);
  console.log(person.study());

  //
  function operation() { 

  for (let i = 0; i < 10; i++) {
    // here for 10 times it alerts i for us
    alert(i);

    // if we want to access the value of property ,write object.key,
    //  we write the name of object and then .
    //  ,it retuns back the value for us
    
  }
}

// ●  Array
// // Arrays are used to store multiple values such as Strings,numbers,objects,booleans,arrays in array

// In This array below we can loop through all indexs with for loop or foreach and .map
//array methods push,pop,unshift,splice,slice, find,findIndex,map and etc..
// push,pop,unshift,splice,slice,...
let singerDetails = [
  {
    
    id: 1,
    isCorrected: false,
    name: "hyper island",
    item: ["Stockholm", "Sweden"],
  },
  {
    id: 2,
    isCorrected: true,
    name: "amin",
    item: ["Mashhad", "Iran"],
  },
];
//<-- it prints each index from first index (0) to length of array -

singerDetails.forEach((element) => {
  console.log(element);
});

Api
// to retrieve data from an api we use fetch in javascript
// Api is stand for Application Programming Interface
const res2 = fetch(url);
const data = res2.json();
console.log(data); // <--- here we can access data from api which we fetched!
// ●  Be able to utilize Asynchronous programming concepts in JavaScript
// Async await
// Asynchronous is a technique that enables your program to start a potentially
// long-running task and still be able to be responsive
// to other events while that task runs,
//  rather than having to wait until that task has finished.
//  Once that task has finished, your program is presented with the result.
async function getInformation() {
  const url = 'askjndkjsad/asdsa'
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}
getInformation();

// ●  Know how to work with time and date in JavaScript
// in js date objects are created with new Date().
const date = new Date();
date = Date.now()
date.getFullYear();
date.getMonth();
date.getDate();
date.getDay();
date.getHours();
date.getMinutes();
date.getSeconds();
date.getMilliseconds();
date.getTime();


//// settimeout execute only one time.
setTimeout(() => {}, 1000);
//the setinterval() method calls a function at specified intervals (in milliseconds).
setInterval(study, 1000);

function study() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString(); // <-- it calls DateTimeFormat
}


// ●  session and local storage + database

// sessionstorage and localstorage are the place which we use to store data in there.
// if you close the tab or restart your os, The data which you saved it into sessionStorage will be lost.
// but any data which you save it into localstorage it save and keep until you remove it manualy or changing the os.
// JSON.stringify() takes a JavaScript object and then converting it into a JSON string.
localStorage.setItem(JSON.stringify("hyper", value));
sessionStorage.setItem(JSON.stringify("hyper", value));

// to access data which we saved in local or session we use local or session.getItem
// JSON.parse() takes a JSON string and then convert it into a JavaScript object.
localStorage.getItem(JSON.parse("hyper"));
sessionStorage.getItem(JSON.parse("hyper"));

// to see data which we saved in localstorage
// right click-inspect - application tab - locasorage or sessionstorage





// IN Browser inbuild developer tools we use console,debugger,network,application
// The console.log() is a one function in JavaScript that
//  print any message or variables that needs to be displayed to the develoepr.
console.log("amin");





// structure of javascript application
//    1-declaration of the variables

//    2-operation and process with variables (use forloop and functions and ...)

//    3-output (innerhtml or alert or console.log)

//4-if I need to use external function from another js file , I have to use import and export
// IN q&a I will show my projects
file 📁 say.js;
function sayHi(user) {
  alert(`Hello, ${user}!`);
}
export { sayHi };

////

file 📁 main.js
import { sayHi } from "./say.js";

// In html file when we want to link script file ,
//  we have to mention script file that type = module
<script src="script.js" type="module"></script>;

sayHi("Amin"); // Hello, Amin!

// in this functions,
// I send 'amin'(value is called argument) to sayHi function and
//  in these  function  I get this value as a parameters

// The return statement is used to return a particular value from the function to the function caller.
//  The function will stop executing when the return statement is called.
//  The return statement should be the last line in a function because
//   the code after the return line will be unreachable.

function fun(x, y) {
  return x * y;
  console.log(x, y); // <--- unreachable
}
var res = fun(12, 30);
console.log(res);
/////

buttonEl.onclick = async () => {
  let inputValue = inputEl.value;
  if (inputValue.length === 0) {
    alert("You have to type city name or country name");
  } else {
    const bgcolor = ["#006E90", "#F18F01", "#ADCAD6", "#99C24D", "#41BBD9"];
    let selClr = Math.floor(Math.random() * bgcolor.length);
    document.body.style.backgroundColor = bgcolor[selClr];

    const url =
      "https://api.weatherapi.com/v1/forecast.json?key=78e3688d63364827a4a204236223110&q=" +
      inputValue +
      "&aqi=no";



  // when we fetch data ,
    // We should be know which type of data we received ,
    // Object or array of object or only one array!
    // When I want to manupulate my DOM After fetching, We want to display data in our project
    // so, for each value we have to create element
    // to create element in js one way we can use document.createElement('name of element') then append them
    //  one way we can use with baktik `` and ${}to specify the target of data
      ////
      async function fetchData(){
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
      }

  


    // first way 
    const nameEl = document.createElement("input");
    const name = nameEl.value;
    console.log(name);
    document.body.append(nameEl);
    ///
    retrievedObject.forEach(element,id) => {

      localStorageEl.innerHTML +=
      //second way with bracket
      `
      <div>
      <img width="150" height="150" alt="dog${id}" src="${element.image}"/>
      <p id="dograndom"> ${element.status}</p>
      </div>
      `;
      // display screenshot for github branches
      // master + branch + break the projects to small parts 
      // when each branch solve issues and problems then press
      // pull new request to merge to to master     
  }
}};





