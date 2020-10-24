"use strict";
function favoritesHeartClick(event) {
  console.log(event.currentTarget);
  const heart = event.currentTarget;
  console.log("entroo");
  let index;
  for (let i = 0; i < favorites.length; i++) {
    if (heart.classList.contains(`heart${i}`)) {
      favorites.splice(i, 1);
      break;
    }
  }
  paintShows();
  listenShow();
  paintFavorites();
  setLocalStorage();
}
function listenFavorite() {
  const favoritesHearts = document.querySelectorAll(".heart");
  for (const favoritesHeart of favoritesHearts) {
    favoritesHeart.addEventListener("click", favoritesHeartClick);
  }
}
