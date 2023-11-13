import "../css/style.css";
import { data, dom } from "./dom";
data.forEach((data) => {
  function insertcard() {
    dom.display.insertAdjacentHTML(
      "afterend",
      `<div class="card">
            <h2 class="name">${data.name}</h2>
            <img class="image"src="${data.Image}" alt="">
            <h3 class="price">${data.cost}</h3>
            <a href="${data.link}"> <button>Click Here to Visit Site</button> </a>
            </div>`
    );
  }
  insertcard();
});