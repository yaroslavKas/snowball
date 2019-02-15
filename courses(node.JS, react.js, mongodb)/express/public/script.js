"use strict";

console.log("start");

let xhr = new XMLHttpRequest();
console.log(`readyState: ${xhr.readyState}`);

xhr.onreadystatechange = () => {
  console.log(`readyState: ${xhr.readyState}`);
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      document.getElementById("root").innerText = xhr.responseText;
    } else {
      console.log(`${xhr.status}:${xhr.statusText}`);
    }
  }

};

xhr.open("POST", "/api/resourceName");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send('{"name": "Tom", "age": 23}');




console.log();