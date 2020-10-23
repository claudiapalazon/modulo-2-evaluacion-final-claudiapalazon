"use strict";

let html = "";
function paintData(string) {
  html += string;
  return html;
}
function paintShows() {
  for (let i = 0; i < shows.length; i++) {
    paintData(`<li class='js-show-item' id="${i}">`);
    paintData(`<h2 class="js-show-name">${shows[i].name}</h2>`);
    paintData(`<div class="js-show-container">`);
    let imageResult;
    if (shows[i].image === null) {
      imageResult =
        "https://via.placeholder.com/210x295/ffffff/666666/? text=TV";
    } else {
      imageResult = shows[i].image.medium;
    }
    paintData(
      `<img class="js-show-img" src="${imageResult}" alt="${shows[i].name}" />`
    );
  }

  showsList.innerHTML = html;
  html = "";
}
