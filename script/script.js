const menu = document.getElementById("menu");
const navBer = document.querySelector(".navber");

menu.addEventListener("click", () =>{
    navBer.classList.toggle("active");
});

window.onscroll = () => {
    navBer.classList.remove("active");
}