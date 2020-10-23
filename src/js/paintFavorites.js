"use strict";

function paintFavorites() {
  const favList = document.querySelector(".main__fav");
  if (favorites.length === 0) {
    favList.innerHTML = "";
  } else if (favorites.length > 0) {
    let htmlFav = "";
    console.log(favList);
    for (let i = 0; i < favorites.length; i++) {
      htmlFav = paintData(htmlFav, `<li class='js-fav-item' id="${i}">`);
      htmlFav = paintData(
        htmlFav,
        `<h2 class="js-fav-name">${favorites[i].name}</h2>`
      );
      htmlFav = paintData(htmlFav, `<div class="js-fav-container">`);
      let imageResult;
      if (favorites[i].image === null) {
        imageResult =
          "https://via.placeholder.com/210x295/ffffff/666666/? text=TV";
      } else {
        imageResult = favorites[i].image.medium;
      }
      htmlFav = paintData(
        htmlFav,
        `<img class="js-show-img" src="${imageResult}" alt="${favorites[i].name}" />`
      );
      htmlFav = paintData(htmlFav, "</div>");
      htmlFav = paintData(htmlFav, "</li>");
    }
    favList.innerHTML = htmlFav;
  }
}
