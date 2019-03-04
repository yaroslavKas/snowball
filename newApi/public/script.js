let id = document.getElementById("id");
let name = document.getElementById("name");
let age = document.getElementById("age");
let get = document.getElementById("get");
let post = document.getElementById("post");
let put = document.getElementById("put");
let del = document.getElementById("delete");
let resultStatus = document.getElementById("result-status");
let resultData = document.getElementById("result-data");

get.addEventListener("click", () => {
   fetch(`/notes/${id.value}`)
   .then((res) => {
      resultStatus.innerText = `${res.status} ${res.statusText}`;
      return res.text();
   })
   .then((res) => resultData.innerText = res)
   .catch((err) => console.dir(err));
});

post.addEventListener("click", () => {
   let body = {
      name: name.value,
      age: Number(age.value)
   };
   fetch("/notes",
      {
         headers: {
            "Content-Type": "application/json"
         },
         method: "POST",
         body: JSON.stringify(body)
      }
   )
   .then((res) => {
      resultStatus.innerText = `${res.status} ${res.statusText}`;
      resultData.innerText = res.headers.get("Location");
   })
   .catch((err) => console.dir(err));
});

put.addEventListener("click", () => {
   let body = {
      name: name.value,
      age: Number(age.value)
   };
   fetch(`/notes/${id.value}`,
      {
         headers: {
            "Content-Type": "application/json"
         },
         method: "PUT",
         body: JSON.stringify(body)
      }
   )
   .then((res) => {
      resultStatus.innerText = `${res.status} ${res.statusText}`;
      return res.text();
   })
   .then((res) => resultData.innerText = res)
   .catch((err) => console.dir(err));
});

del.addEventListener("click", () => {
   fetch(`/notes/${id.value}`, {method: "DELETE"})
   .then((res) => {
      resultStatus.innerText = `${res.status} ${res.statusText}`;
      return res.text();
   })
   .then((res) => resultData.innerText = res)
   .catch((err) => console.dir(err));
});