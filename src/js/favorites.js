"use strict";

function favoritesShows(event) {
  const clicked = parseInt(event.currentTarget.id);
  const isFavorite = favorites.indexOf(shows[clicked]);
  let prueba = false;
  let resultFav;
  for (let i = 0; i < favorites.length; i++) {
    if (shows[clicked].id === favorites[i].id) {
      prueba = true;
      resultFav = i;
      break;
    }
  }
  if (prueba === true) {
    favorites.splice(resultFav, 1);
  } else if (prueba === false) {
    if (isFavorite === -1) {
      favorites.push(shows[clicked]);
    } else {
      favorites.splice(isFavorite, 1);
    }
  }
  paintShows();
  listenShow();
}

function listenShow() {
  const showItems = document.querySelectorAll(".js-show-item");
  for (const showItem of showItems) {
    showItem.addEventListener("click", favoritesShows);
  }
  paintFavorites();
}
