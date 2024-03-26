const elMenuBtn = document.querySelector(".js-menu-btn");

function siteOpenToClosed(evt) {
  evt.preventDefault();
  elMenuBtn.closest(".site-header").classList.toggle("open");
  document.body.classList.toggle("unscrol");
}

elMenuBtn.addEventListener("click", siteOpenToClosed);
