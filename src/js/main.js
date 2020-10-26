"use strict";

const btn = document.querySelector(".js--button");
const main = document.querySelector(".main");
const mainList = document.querySelector(".main__lists");
const showsList = document.querySelector(".main__list");

let shows = [];
let favorites = [];
function getFetch() {
  const input = document.querySelector(".js--input").value;
  fetch(`//api.tvmaze.com/search/shows?q=${input}`)
    .then((response) => response.json())
    .then((data) => {
      shows = [];
      for (let i = 0; i < data.length; i++) {
        shows[i] = data[i].show;
      }
      paintShows();
      listenShow();
    });
}
getLocalStorage();
btn.addEventListener("click", getFetch);
