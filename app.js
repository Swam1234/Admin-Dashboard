// Loading Page Animation
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".pre-loading").classList.add("loading-end");
        document.querySelector(".whole-body").style.display = "block";
    }, 1000)
})
//Loading Page Animation End


//Side Bar close and open button
const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
const sidebarOpenBtn = document.getElementById("sidebar-open-btn");
const sidebarMenu = document.getElementById("sidebar");

sidebarCloseBtn.addEventListener("click", () => {
    sidebarMenu.classList.toggle("close");
})

sidebarOpenBtn.addEventListener("click", () => {
    sidebarMenu.classList.toggle("close");
})
//Side Bar close and open button End