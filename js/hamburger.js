const button = document.querySelector(".hamburger");
const menu = document.querySelector("nav .menu");

button.addEventListener("click", () => {
    menu.classList.toggle("active");
});

/* Close menu if a nav button is pressed */
menu.querySelectorAll("li").forEach(n => n.addEventListener("click", () => {
    menu.classList.remove("active");
}));