"use strict";
//Se pintan los favoritos. Se añaden los estilos necesarios.

function paintFavorites() {
  const favList = document.querySelector(".main__fav");
  if (favorites.length === 0) {
    favList.innerHTML = "";
    mainList.classList.remove("js-main-containerList"); // Al eliminar todos los favoritos, se elimina el contenedor.
    showsList.classList.remove("js-main-showListFav"); // Al eliminar todos los favoritos, la lista de "shows" vuelve al diseño por defecto.
  } else if (favorites.length > 0) {
    if (shows.length === 0) {
      mainList.classList.add("js-main-containerList2");
      showsList.classList.add("js-main-showListFav");
      showsList.classList.add("js-main-noresults");
    } else {
      mainList.classList.remove("js-main-containerList2");
      showsList.classList.remove("js-main-noresults");
      showsList.classList.add("js-main-showListFav"); //cambia el grid template si hay favoritos.
      mainList.classList.add("js-main-containerList"); //contenedor con las dos listas
    }
    favList.classList.add("js-main-showFav"); // Añade la clase para las tarjetas de favoritos
    let htmlFav = "";
    for (let i = 0; i < favorites.length; i++) {
      htmlFav = paintData(htmlFav, `<li class='js-fav-item' id="${i}">`);
      htmlFav = paintData(
        htmlFav,
        `<h2 class="js-fav-name">${favorites[i].name} <span class="heart heart${i}">❤</span></h2>`
      );
      let imageResult;
      if (favorites[i].image === null) {
        imageResult =
          "https://via.placeholder.com/210x295/ffffff/666666/? text=TV";
      } else {
        imageResult = favorites[i].image.medium;
      }
      htmlFav = paintData(
        htmlFav,
        `<img class="js-fav-img" src="${imageResult}" alt="${favorites[i].name}" />`
      );
      htmlFav = paintData(htmlFav, "</li>");
    }
    favList.innerHTML = htmlFav;
  }
}
