"use strict";
function favoritesHeartClick(event) {
  const heart = event.currentTarget;
  let index;
  for (let i = 0; i < favorites.length; i++) {
    if (heart.classList.contains(`heart${i}`)) {
      favorites.splice(i, 1);
      break;
    }
  }
  paintFavorites();
  setLocalStorage();
  paintShows();
  listenShow();
}
function listenFavorite() {
  const favoritesHearts = document.querySelectorAll(".heart");
  for (const favoritesHeart of favoritesHearts) {
    favoritesHeart.addEventListener("click", favoritesHeartClick);
  }
}
