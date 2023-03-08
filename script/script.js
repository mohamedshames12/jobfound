const menu = document.getElementById("menu");
const navBer = document.querySelector(".navber");

menu.addEventListener("click", () =>{
    navBer.classList.toggle("active");
});

window.onscroll = () => {
    navBer.classList.remove("active");
}

let dropdown_items = document.querySelectorAll(".items");

dropdown_items.forEach(items => {
    items.onclick = () => {
        items_parent = items.parentElement.parentElement;
        const output = items_parent.querySelector(".output");
        output.value = items.innerText;
    }
})

const view_Page = document.querySelectorAll(".view")

view_Page.forEach(item => {
    item.onclick = () => {
        location.href = "../components/view_company.html"
    }
})