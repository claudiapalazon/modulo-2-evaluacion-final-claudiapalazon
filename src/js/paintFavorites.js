"use strict";

function paintFavorites() {
  const favList = document.querySelector(".main__fav");
  if (favorites.length === 0) {
    favList.innerHTML = "";
    mainList.classList.remove("js-main-containerList");
    showsList.classList.remove("js-main-showListFav");
  } else if (favorites.length > 0) {
    mainList.classList.add("js-main-containerList");
    favList.classList.add("js-main-showFav");
    showsList.classList.add("js-main-showListFav");
    let htmlFav = "";
    for (let i = 0; i < favorites.length; i++) {
      htmlFav = paintData(htmlFav, `<li class='js-fav-item' id="${i}">`);
      htmlFav = paintData(
        htmlFav,
        `<h2 class="js-fav-name">${favorites[i].name}</h2>`
      );
      let imageResult;
      if (favorites[i].image === null) {
        imageResult =
          "https://via.placeholder.com/210x295/ffffff/666666/? text=TV";
      } else {
        imageResult = favorites[i].image.medium;
      }
      htmlFav = paintData(
        htmlFav,
        `<img class="js-fav-img" src="${imageResult}" alt="${favorites[i].name}" />`
      );
      htmlFav = paintData(htmlFav, "</li>");
    }
    favList.innerHTML = htmlFav;
  }
}
