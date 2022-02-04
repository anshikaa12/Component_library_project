let demo_btn = document.getElementById("modal-demo-btn");
let static = document.getElementById("static-modal");
let close_btns= document.getElementById("example-close-modal");
let clickanywhere=document.getElementById("click-anywhere-modal");
let close_btnc=document.getElementById("example-close-modal-click");
let demo_btn2= document.getElementById("modal-demo-btn-click");
let bg1= document.getElementById("demo-bg");
let bg2= document.getElementById("demo-bg2");
console.log(clickanywhere);
demo_btn.onclick= ()=>{
    static.classList.remove("hide-modal");
    bg1.style.display="block";
}
demo_btn2.onclick=()=>{
    clickanywhere.classList.remove("hide-modal");
    bg2.style.display="block";
}
close_btns.onclick= ()=>{
    static.classList.add("hide-modal");
    bg1.style.display="none";
}
close_btnc.onclick=()=>{
    clickanywhere.classList.add("hide-modal");
    bg2.style.display="none";
}
/******for click anywhere********* */
window.onclick = function(event) {
    if (event.target == bg2) {
      clickanywhere.classList.add("hide-modal");
      bg2.style.display="none";
    }
  }