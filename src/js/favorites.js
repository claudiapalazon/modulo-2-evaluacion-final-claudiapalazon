"use strict";
//Cada vez que se marque un "show" como favorito, se guarda en un array. Se comprueba si en el array ya existe ese favorito para no duplicarlo.

function favoritesShows(event) {
  const clicked = parseInt(event.currentTarget.id);
  console.log(shows[clicked].name);
  const isFavorite = favorites.indexOf(shows[clicked]);
  let result = false;
  let resultFav;
  for (let i = 0; i < favorites.length; i++) {
    if (shows[clicked].id === favorites[i].id) {
      result = true;
      resultFav = i;
      break;
    }
  }
  if (result === true) {
    favorites.splice(resultFav, 1);
  } else if (result === false) {
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
  setLocalStorage();
  listenFavorite(); //Escucha el corazón de los favoritos para ver si hay que borrarlo o no (heart.js)
  listenEliminate(); //Escucha el botón de eliminar todos los favoritos (heart.js)
}
