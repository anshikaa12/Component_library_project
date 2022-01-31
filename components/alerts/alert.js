
let prime = document.getElementById("alert-close-example");
closeAlert = () => {
    prime.classList.add("hide-alert");
}

let demo = document.getElementById("DemoAlert");
showAlert = () => {
    demo.classList.remove("hide-alert");
}
closeDemoAlert = () => {
    demo.classList.add("hide-alert");
}