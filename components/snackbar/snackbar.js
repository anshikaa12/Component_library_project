let baseline = document.getElementsByClassName("baseline-bar")[0];
let leading = document.getElementsByClassName("leading-bar")[0];
let stacked = document.getElementsByClassName("stacked-bar")[0];
let close_btn1 = document.getElementsByClassName("snack-close")[0];
let close_btn2 = document.getElementsByClassName("snack-close")[1];
let close_btn3 = document.getElementsByClassName("snack-close")[2];
let baseline_btn = document.getElementById("baseline-btn");
let leading_btn = document.getElementById("leading-btn");
let stacked_btn = document.getElementById("stacked-btn");

/********baseline**************** */
baseline_btn.onclick = () => {
    baseline.classList.remove("hide-snack");
    setTimeout(() => {
        baseline.classList.add("hide-snack");
    }, 5000);

}
close_btn1.onclick = () => {
    baseline.classList.add("hide-snack");
}
/********leading**************** */
leading_btn.onclick = () => {
    leading.classList.remove("hide-snack");
    setTimeout(() => {
        leading.classList.add("hide-snack");
    }, 5000);

}
close_btn2.onclick = () => {
    leading.classList.add("hide-snack");
}
/********stacked**************** */
stacked_btn.onclick = () => {
    stacked.classList.remove("hide-snack");
    setTimeout(() => {
        stacked.classList.add("hide-snack");
    }, 5000);

}
close_btn3.onclick = () => {
    stacked.classList.add("hide-snack");
}

/*************For the snack-top************** */

let demobtn = document.getElementById("demo-top-snack");
let snack = document.getElementsByClassName("snack-top")[0];
demobtn.onclick = () => {
    snack.classList.remove("hide-snack");
    setTimeout(() => {
        snack.classList.add("hide-snack");
    }, 5000);

}