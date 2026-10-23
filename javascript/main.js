let navList = document.querySelector(".category-nav-list");
let buttonNav = document.querySelector(".catogry-btn");

// buttonNav.onclick = function () {
//   navList.classList.toggle("activ");
// };
buttonNav.addEventListener("click", function (e) {
  e.stopPropagation();
  navList.classList.toggle("activ");
});
document.addEventListener("click", function (e) {
  if (!navList.contains(e.target)) {
    navList.classList.remove("activ");
  }
});

// swiper js slider
