import "../css/style.css";
import { data, dom } from "./dom";
// data.forEach((data) => {
//   function insertcard() {
//     dom.display.insertAdjacentHTML(
//       "afterbegin",
//       `
//       <div class="card">
//             <h2 class="name">${data.name}</h2>
//             <img class="image"src="${data.Image}" alt="">
//             <h3 class="price">${data.cost}</h3>
//             <a href="${data.link}"> <button>Click Here to Visit Site</button> </a>
//             </div>

//             `
//     );
//   }
//   insertcard();
// });
// dom.totalbtn.addEventListener("click", function () {
//   dom.display.innerHTML = "";
//   data.forEach((data) => {
//     dom.display.insertAdjacentHTML(
//       "afterbegin",
//       `
//     <div class="card">
//           <h2 class="name">${data.name}</h2>
//           <img class="image"src="${data.Image}" alt="">
//           <h3 class="price">${data.cost}</h3>
//           <a href="${data.link}"> <button>Click Here to Visit Site</button> </a>
//           </div>
//           `
//     );
//   });
// });
// dom.instockbtn.addEventListener("click", function () {
//   dom.display.innerHTML = "";
//   data
//     .filter((data) => data.instock === true)
//     .forEach((data) => {
//       dom.display.insertAdjacentHTML(
//         "afterbegin",
//         `
//       <div class="card">
//             <h2 class="name">${data.name}</h2>
//             <img class="image"src="${data.Image}" alt="">
//             <h3 class="price">${data.cost}</h3>
//             <a href="${data.link}"> <button>Click Here to Visit Site</button> </a>
//             </div>
//             `
//       );
//     });
// });
// dom.animalbtn.addEventListener("click", function () {
//   dom.display.innerHTML = "";
//   data
//     .filter((data) => data.animalrelated === true)
//     .forEach((data) => {
//       dom.display.insertAdjacentHTML(
//         "afterbegin",
//         `
//       <div class="card">
//             <h2 class="name">${data.name}</h2>
//             <img class="image"src="${data.Image}" alt="">
//             <h3 class="price">${data.cost}</h3>
//             <a href="${data.link}"> <button>Click Here to Visit Site</button> </a>
//             </div>
//             `
//       );
//     });
// });
function clear() {
  dom.display.innerHTML = "";
}

function insertcard(data) {
  dom.display.insertAdjacentHTML(
    "afterbegin",
    ` 
      <div class="card">
            <h2 class="name">${data.name}</h2>
            <img class="image"src="${data.Image}" alt="">
            <h3 class="price">${data.cost}</h3>
            <a href="${data.link}"> <button>Click Here to Visit Site</button> </a>
            </div>
          
            `
  );
}
data.forEach((data) => {
  insertcard(data);
});

dom.instockbtn.addEventListener("click", function () {
  clear();
  const instockitem = data.filter((data) => data.instock === true);
  instockitem.forEach((item) => insertcard(item));
});

dom.animalbtn.addEventListener("click", function () {
  clear();
  const animalitem = data.filter((data) => data.animalrelated === true);
  animalitem.forEach((item) => insertcard(item));
});

dom.totalbtn.addEventListener("click", function () {
  clear();
  data.forEach((data) => {
    insertcard(data);
  });
});
dom.theme.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("green");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("green");
  }
});
