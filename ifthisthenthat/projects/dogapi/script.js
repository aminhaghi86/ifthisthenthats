import {url } from './url.js';
// declaration of variables
const buttonEl = document.getElementById("btn");
const btnLocal = document.getElementById("btnLocal");
const btnLocalClear = document.getElementById("LocalClear");
let displayDataEl = document.getElementById("weather");
let localStorageEl = document.getElementById("localStorage");
let arrData = [];
////

// operation and functions

const renderFun = async () => {


  const res = await fetch(url);
  const data = await res.json();

  console.log(data);
  // DOM MANUPULATION
  displayDataEl.innerHTML = `
  <img width="150" height="150" alt="randoms" src="${data.message}"/>
  <p id="dograndom">  ${data.status}</p>

  `;

  console.log(data);
  const objData = {
    image: `${data.message}`,
    status: `${data.status}`,
  };
  arrData.push({...objData});
  console.log(arrData);
  savetoLocal(arrData);
};
const savetoLocal = (arr) => {
  localStorage.setItem("data", JSON.stringify(arr));
};
// localStorage.getItem("data");

// localStorage.removeItem("data");


const displayFromLocal = () => {
  localStorageEl.innerHTML = "";
  var retrievedObject = JSON.parse(localStorage.getItem("data"));
  arrData = retrievedObject;
  console.log(retrievedObject);
  retrievedObject.forEach((element,id) => {
    localStorageEl.innerHTML += `
    <div>
    <img width="150" height="150" alt="dog${id}" src="${element.image}"/>
    <p id="dograndom"> ${element.status}</p>
    </div>
    `;
  });


};
const RemoveLocal = () => {
  localStorage.clear();
  localStorageEl.innerHTML =''
  arrData=[]
};

displayFromLocal()
//
buttonEl.addEventListener("click", renderFun); //create
btnLocal.addEventListener("click", displayFromLocal); //read
btnLocalClear.addEventListener("click", RemoveLocal); //delete





// localStorage.setItem (“Key”, “new Value”); update specefic item
// localStorage.removeItem("mytime");/ remove specefic item
