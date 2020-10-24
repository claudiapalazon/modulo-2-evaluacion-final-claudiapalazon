"use strict";

function paintData(string1, string) {
  string1 += string;
  return string1;
}
function getClassShow(i) {
  let classFav;
  const favoriteIndex = favorites.indexOf(shows[i]);
  if (favoriteIndex === -1) {
    for (const favorite of favorites) {
      if (shows[i].id === favorite.id) {
        classFav = "js-show-item-favorite";
        return classFav;
      } else {
        classFav = "";
      }
    }
  } else {
    classFav = "js-show-item-favorite";
  }
  return classFav;
}

function paintShows() {
  main.classList.add("js-main-showList");
  let html = "";
  if (shows.length === 0) {
    console.log("holi");
    const input = document.querySelector(".js--input").value;
    showsList.innerHTML = `No existe ningun resultado con el nombre "${input}"`;
    return;
  } else {
    console.log("holi2");
    for (let i = 0; i < shows.length; i++) {
      let classFav = getClassShow(i);
      html = paintData(html, `<li class='js-show-item ${classFav}' id="${i}">`);
      html = paintData(html, `<h2 class="js-show-name">${shows[i].name}</h2>`);
      let imageResult;
      if (shows[i].image === null) {
        imageResult =
          "https://via.placeholder.com/210x295/666666/ffffff/? text=TV";
      } else {
        imageResult = shows[i].image.medium;
      }
      html = paintData(
        html,
        `<img class="js-show-img" src="${imageResult}" alt="${shows[i].name}" />`
      );
      html = paintData(html, "</li>");
    }
    showsList.innerHTML = html;
  }
}
