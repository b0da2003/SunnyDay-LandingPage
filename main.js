const menu = document.querySelector("#menu");
const navbarToggler = document.querySelector("#tringle");

menu.addEventListener("click", () => {
  navbarToggler.classList.toggle("max-md:hidden");
});
