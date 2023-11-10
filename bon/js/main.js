import "../css/style.css";
import { data } from "./dom";
data.forEach((data) => {
  function insertcard() {
    data.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="card">
            <h2 class="name">${data.name}</h2>
            <img class="image"src="${data.Image}" alt="">
            <h3 class="price">${data.cost}</h3>
            </div>`
    );
  }
  insertcard();
});
