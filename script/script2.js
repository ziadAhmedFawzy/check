let passWord = document.getElementById("PASS")
let danger = document.getElementById("danger")
let warning = document.getElementById("warning")
let success = document.getElementById("success")
let i = 0

let name1 = "ziad"
passWord.addEventListener("keydown", function(){
    if(passWord.value.length > 0 && passWord.value.length <= 4) {
        danger.classList.add("visible")
        warning.classList.remove("visible")
        success.classList.remove("visible")
    }
    else if(passWord.value.length > 4 && passWord.value.length <= 10)
    {
        warning.classList.add("visible")
        danger.classList.add("visible")
        success.classList.remove("visible")
    }
    else if(passWord.value.length > 10)
    {
        // warning.classList.remove("visible")
        success.classList.add("visible")
        warning.classList.add("visible")
        danger.classList.add("visible")
    }
    else {
        danger.classList.remove("visible")
        warning.classList.remove("visible")
        success.classList.remove("visible")
    }
})
