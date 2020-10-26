"use strict";

//Funciones de guardar y recoger del localStorage. Si te encuentras en la página principal, puedes mirar lo que hay guardado en el localStorage. También puedes verlo si realizas cualquier búsqueda.

function clickInHeart() {
  // main.classList.add("mainFavorites");
  paintFavorites();
  listenFavoriteLocal();
}
function paintHeart() {
  const newItem = document.createElement("div");
  const newContent = document.createTextNode("❤");
  newItem.appendChild(newContent);
  newItem.classList.add("heart-favorite");
  main.appendChild(newItem);

  newItem.addEventListener("click", clickInHeart);
}

function setLocalStorage() {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function getLocalStorage() {
  const localFavorites = localStorage.getItem("favorites");
  const localFavoritesArray = JSON.parse(localFavorites);
  if (localFavorites !== null) {
    if (localFavoritesArray.length > 0) {
      favorites = localFavoritesArray;
      paintHeart();
    }
  }
}

function favoritesHeartClickLocal(event) {
  const heart = event.currentTarget;
  for (let i = 0; i < favorites.length; i++) {
    if (heart.classList.contains(`heart${i}`)) {
      favorites.splice(i, 1);
      break;
    }
  }
  paintFavorites();
  setLocalStorage();
  listenFavoriteLocal();
}
function listenFavoriteLocal() {
  const favoritesHearts = document.querySelectorAll(".heart");
  for (const favoritesHeart of favoritesHearts) {
    favoritesHeart.addEventListener("click", favoritesHeartClickLocal);
  }
}
