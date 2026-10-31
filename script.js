const log = document.querySelector("#log")
const backHome = document.querySelector("#backHome")
console.log(backHome)
const getStarted = document.querySelector("#getStarted")

if (log){
log.addEventListener("click", function (){
   window.location.href = "login.html"
})
}

if(backHome){
backHome.addEventListener("click", function (){
    window.location.href = "home.html"
})
}

if(getStarted){
getStarted.addEventListener("click", function (){
    window.location.href = "login.html"
})
}
