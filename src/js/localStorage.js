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
    // listenFavoriteLocal();
  }
}

// function favoritesHeartClickLocal(event) {
//   console.log(event.currentTarget);
//   const heart = event.currentTarget;
//   console.log("entroo");
//   let index;
//   for (let i = 0; i < favorites.length; i++) {
//     if (heart.classList.contains(`heart${i}`)) {
//       favorites.splice(i, 1);
//       break;
//     }
//   }
//   paintFavorites();
//   setLocalStorage();
// }
// function listenFavoriteLocal() {
//   const favoritesHearts = document.querySelectorAll(".heart");
//   for (const favoritesHeart of favoritesHearts) {
//     favoritesHeart.addEventListener("click", favoritesHeartClickLocal);
//   }
// }
