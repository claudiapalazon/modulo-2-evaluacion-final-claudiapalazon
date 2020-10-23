"use strict";

const btn = document.querySelector(".js--button");
const showsList = document.querySelector(".main__list");
const main = document.querySelector(".main");

let shows = [];
let favorites = [];
// let favoriteList = [];
function getFetch() {
  const input = document.querySelector(".js--input").value;
  console.log(input); //Borrar console más adelante
  fetch(`//api.tvmaze.com/search/shows?q=${input}`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        shows[i] = data[i].show;
      }
      paintShows();
      listenShow();
    });
}

btn.addEventListener("click", getFetch);
