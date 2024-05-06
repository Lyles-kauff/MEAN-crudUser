const hamburger = document.querySelector(".hamburger")
const dropdown = document.querySelector(".dropdown")

console.log(hamburger,dropdown);

hamburger.addEventListener("click",function() {
dropdown.classList.toggle("open");
});