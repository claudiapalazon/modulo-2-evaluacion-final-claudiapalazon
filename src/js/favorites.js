"use strict";

function favoritesShows(event) {
  const clicked = parseInt(event.currentTarget.id);
  const isFavorite = favorites.indexOf(shows[clicked]);
  if (isFavorite === -1) {
    console.log("Entro aquí222");
    if (favorites.length > 0) {
      let prueba;
      for (const favorite of favorites) {
        if (shows[clicked].id === favorite.id) {
          prueba = true;
          break;
        } else {
          prueba = false;
        }
      }
      if (prueba === false) {
        favorites.push(shows[clicked]);
      }
      //else if (prueba === true) {
      //   favorites.splice(event.currentTarget, 1);
      // }
    } else {
      favorites.push(shows[clicked]);
    }
  } else {
    console.log("Entro aquí");
    favorites.splice(isFavorite, 1);
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
