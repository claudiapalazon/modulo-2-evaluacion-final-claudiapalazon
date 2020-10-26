"use strict";function favoritesShows(t){const e=parseInt(t.currentTarget.id),s=favorites.indexOf(shows[e]);let a,i=!1;for(let t=0;t<favorites.length;t++)if(shows[e].id===favorites[t].id){i=!0,a=t;break}!0===i?favorites.splice(a,1):!1===i&&(-1===s?favorites.push(shows[e]):favorites.splice(s,1)),paintShows(),listenShow()}function listenShow(){const t=document.querySelectorAll(".js-show-item");for(const e of t)e.addEventListener("click",favoritesShows);paintFavorites(),setLocalStorage(),listenFavorite(),listenEliminate()}function favoritesHeartClick(t){const e=t.currentTarget;for(let t=0;t<favorites.length;t++)if(e.classList.contains("heart"+t)){favorites.splice(t,1);break}paintFavorites(),setLocalStorage(),paintShows(),listenShow()}function listenFavorite(){const t=document.querySelectorAll(".heart");for(const e of t)e.addEventListener("click",favoritesHeartClick)}function favoritesEliminate(){favorites=[],paintFavorites(),setLocalStorage(),paintShows(),listenShow()}function listenEliminate(){document.querySelector(".button-fav").addEventListener("click",favoritesEliminate)}function clickInHeart(){const t=document.querySelector(".container-fav");main.classList.contains("mainFavorites")?(main.classList.remove("mainFavorites"),t.classList.add("container-hidden")):(t.classList.remove("container-hidden"),main.classList.add("mainFavorites"),paintFavorites(),listenFavoriteLocal(),listenEliminateLocal())}function paintHeart(){const t=document.createElement("div"),e=document.createTextNode("❤");t.appendChild(e),t.classList.add("heart-favorite"),main.appendChild(t),t.addEventListener("click",clickInHeart)}function setLocalStorage(){localStorage.setItem("favorites",JSON.stringify(favorites))}function getLocalStorage(){const t=localStorage.getItem("favorites"),e=JSON.parse(t);null!==t&&e.length>0&&(favorites=e,paintHeart())}function favoritesHeartClickLocal(t){const e=t.currentTarget;for(let t=0;t<favorites.length;t++)if(e.classList.contains("heart"+t)){favorites.splice(t,1);break}paintFavorites(),setLocalStorage(),listenFavoriteLocal()}function hearHeart(){if(0===favorites.length){document.querySelector(".heart-favorite").remove(),main.classList.remove("mainFavorites")}}function listenFavoriteLocal(){hearHeart();const t=document.querySelectorAll(".heart");for(const e of t)e.addEventListener("click",favoritesHeartClickLocal)}function favoritesEliminateLocal(){favorites=[];document.querySelector(".heart-favorite").remove(),main.classList.remove("mainFavorites"),paintFavorites(),setLocalStorage()}function listenEliminateLocal(){document.querySelector(".button-fav").addEventListener("click",favoritesEliminateLocal)}const btn=document.querySelector(".js--button"),main=document.querySelector(".main"),mainList=document.querySelector(".main__lists"),showsList=document.querySelector(".main__list");let shows=[],favorites=[];function getFetch(){const t=document.querySelector(".js--input").value;fetch("//api.tvmaze.com/search/shows?q="+t).then(t=>t.json()).then(t=>{shows=[];for(let e=0;e<t.length;e++)shows[e]=t[e].show;paintShows(),listenShow()})}function paintFavorites(){const t=document.querySelector(".main__fav");if(0===favorites.length)t.innerHTML="",mainList.classList.remove("js-main-containerList"),showsList.classList.remove("js-main-showListFav");else if(favorites.length>0){mainList.classList.add("js-main-containerList"),showsList.classList.add("js-main-showListFav"),t.classList.add("js-main-showFav");let e="";for(let t=0;t<favorites.length;t++){let s;e=paintData(e,`<li class='js-fav-item' id="${t}">`),e=paintData(e,`<h2 class="js-fav-name">${favorites[t].name} <span class="heart heart${t}">❤</span></h2>`),s=null===favorites[t].image?"https://via.placeholder.com/210x295/ffffff/666666/? text=TV":favorites[t].image.medium,e=paintData(e,`<img class="js-fav-img" src="${s}" alt="${favorites[t].name}" />`),e=paintData(e,"</li>")}t.innerHTML=e}}function paintData(t,e){return t+=e}function getClassShow(t){let e;if(-1===favorites.indexOf(shows[t]))for(const s of favorites){if(shows[t].id===s.id)return e="js-show-item-favorite",e;e=""}else e="js-show-item-favorite";return e}function paintShows(){let t="";if(0===shows.length)if(favorites.length>0){main.classList.remove("mainFavorites");document.querySelector(".container-fav").classList.add("container-hidden");const t=document.querySelector(".js--input").value;showsList.innerHTML=`<small class="no-results">No existe ningun resultado con el nombre "${t}"</small>`}else{const t=document.querySelector(".js--input").value;showsList.innerHTML=`<small class="no-results">No existe ningun resultado con el nombre "${t}"</small>`,showsList.classList.add("js-main-noresults")}else{main.classList.remove("mainFavorites"),main.classList.add("js-main-showList"),showsList.classList.remove("js-main-noresults");for(let e=0;e<shows.length;e++){let s;t=paintData(t,`<li class='js-show-item ${getClassShow(e)}' id="${e}">`),t=paintData(t,`<h2 class="js-show-name">${shows[e].name}</h2>`),s=null===shows[e].image?"https://via.placeholder.com/210x295/666666/ffffff/? text=TV":shows[e].image.medium,t=paintData(t,`<img class="js-show-img" src="${s}" alt="${shows[e].name}" />`),t=paintData(t,"</li>")}showsList.innerHTML=t}}getLocalStorage(),btn.addEventListener("click",getFetch);