let dropdown = document.getElementsByClassName("mobile-sidebar-icon")[0];
let mobileSidebar = document.getElementsByClassName("side-bar")[0];
let components= document.querySelectorAll(".side-bar-links");
dropdown.onclick = ()=>{
    mobileSidebar.classList.toggle("side-bar-active");
}
for(i=0;i<components.length;i++){
    components[i].addEventListener("click",()=>{
        mobileSidebar.classList.toggle("side-bar-active");
    })
}