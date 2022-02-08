let ham= document.querySelector(".nav-hamburger");
let side= document.querySelector(".side-bar");
ham.onclick=()=>{
side.classList.toggle("sidebar-active");
}

/************************* */
let sidebarlink= document.querySelectorAll(".side-bar-links");

for(let i=0;i<sidebarlink.length;i++){
    sidebarlink[i].addEventListener("click",()=>{
        side.classList.toggle("sidebar-active");
    }
        )
}