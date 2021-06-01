const searchEl =document.querySelector(".search");
const searchInput =searchEl.querySelector("input");
const searchIcon =searchEl.querySelector(".material-icons");

searchEl.addEventListener("click",function () {
  searchInput.focus();
})