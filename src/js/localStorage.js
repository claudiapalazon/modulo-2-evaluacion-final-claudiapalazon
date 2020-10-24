"use strict";

function setLocalStorage() {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function getLocalStorage() {
  const localFavorites = localStorage.getItem("favorites");
  const localFavoritesArray = JSON.parse(localFavorites);
  if (localFavoritesArray !== null) {
    favorites = localFavoritesArray;
    paintFavorites();
  }
}
