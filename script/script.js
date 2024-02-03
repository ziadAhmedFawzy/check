let PASS = document.getElementById("PASS")
let showPass = document.getElementById("showPass")
let hiddenPass = document.getElementById("hiddenPass")

showPass.addEventListener("click", function() {
    PASS.setAttribute("type", "text")
})

hiddenPass.addEventListener("click", function() {
    PASS.setAttribute("type", "password")
})

showPass.addEventListener("click", function() {
    showPass.classList.add("hidden")
    hiddenPass.classList.add("show")
    showPass.classList.remove("show")
})
hiddenPass.addEventListener("click", function() {
    showPass.classList.add("show")
    hiddenPass.classList.remove("show")
})