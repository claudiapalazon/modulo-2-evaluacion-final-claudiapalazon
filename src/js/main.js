"use strict";

const btn = document.querySelector(".js--button");
const showsList = document.querySelector(".main__list");

let shows = [];
let result;
function getDogImage() {
  const input = document.querySelector(".js--input").value;
  console.log(input);
  fetch(`http://api.tvmaze.com/search/shows?q=${input}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        showsList.innerHTML = "No existe ningun resultado con ese nombre";
      } else {
        for (let i = 0; i < data.length; i++) {
          shows[i] = data[i].show;
        }
        paintShows();
      }
    });
}

btn.addEventListener("click", getDogImage);
