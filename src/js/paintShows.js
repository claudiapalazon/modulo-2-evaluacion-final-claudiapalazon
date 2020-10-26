"use strict";

//Se pinta la lista de "shows". En el caso de que no exista resultado con la búsqueda, salta uno de error.

function paintData(string1, string) {
  string1 += string;
  return string1;
}
function getClassShow(i) {
  let classFav;
  const favoriteIndex = favorites.indexOf(shows[i]);
  if (favoriteIndex === -1) {
    for (const favorite of favorites) {
      if (shows[i].id === favorite.id) {
        classFav = "js-show-item-favorite";
        return classFav;
      } else {
        classFav = "";
      }
    }
  } else {
    classFav = "js-show-item-favorite";
  }
  return classFav;
}

function paintShows() {
  let html = "";
  if (shows.length === 0) {
    if (favorites.length > 0) {
      const containerFav = document.querySelector(".container-fav");
      containerFav.classList.add("container-hidden"); //Hace que no se vean los favoritos en la página principal
      const input = document.querySelector(".js--input").value;
      showsList.innerHTML = `<small class="no-results">No existe ningun resultado con el nombre "${input}"</small>`;
    } else {
      const input = document.querySelector(".js--input").value;
      showsList.innerHTML = `<small class="no-results">No existe ningun resultado con el nombre "${input}"</small>`;
      showsList.classList.add("js-main-noresults"); //Da estilos al main cuando no hay resultados
    }
  } else {
    // main.classList.remove("mainFavorites");
    main.classList.add("js-main-showList");
    showsList.classList.remove("js-main-noresults");
    for (let i = 0; i < shows.length; i++) {
      let classFav = getClassShow(i);
      html = paintData(html, `<li class='js-show-item ${classFav}' id="${i}">`);
      html = paintData(html, `<h2 class="js-show-name">${shows[i].name}</h2>`);
      let imageResult;
      if (shows[i].image === null) {
        imageResult =
          "https://via.placeholder.com/210x295/666666/ffffff/? text=TV";
      } else {
        imageResult = shows[i].image.medium;
      }
      html = paintData(
        html,
        `<img class="js-show-img" src="${imageResult}" alt="${shows[i].name}" />`
      );
      html = paintData(html, "</li>");
    }
    showsList.innerHTML = html;
  }
}
