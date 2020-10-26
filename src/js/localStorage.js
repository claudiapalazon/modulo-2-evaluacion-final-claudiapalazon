"use strict";

//Funciones de guardar y recoger del localStorage. Si te encuentras en la página principal, puedes mirar lo que hay guardado en el localStorage. También puedes verlo si realizas cualquier búsqueda.

function clickInHeart() {
  const containerFav = document.querySelector(".container-fav");
  if (main.classList.contains("mainFavorites")) {
    main.classList.remove("mainFavorites");
    containerFav.classList.add("container-hidden");
  } else {
    mainList.classList.add("js-main-containerList");
    containerFav.classList.remove("container-hidden");
    main.classList.add("mainFavorites");
    paintFavorites();
    listenFavoriteLocal();
    listenEliminateLocal();
  }
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
  if (localFavoritesArray !== null) {
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

function hearHeart() {
  if (favorites.length === 0) {
    const items = document.querySelector(".heart-favorite");
    items.remove();
    main.classList.remove("mainFavorites");
  }
}

function listenFavoriteLocal() {
  hearHeart();
  const favoritesHearts = document.querySelectorAll(".heart");
  for (const favoritesHeart of favoritesHearts) {
    favoritesHeart.addEventListener("click", favoritesHeartClickLocal);
  }
}

function favoritesEliminateLocal() {
  favorites = [];
  const items = document.querySelector(".heart-favorite");
  items.remove();
  main.classList.remove("mainFavorites");
  paintFavorites();
  setLocalStorage();
}

function listenEliminateLocal() {
  const buttonFav = document.querySelector(".button-fav");
  buttonFav.addEventListener("click", favoritesEliminateLocal);
}
