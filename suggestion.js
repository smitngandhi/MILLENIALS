const clickme = document.querySelectorAll(".clickme");
const content = document.querySelector(".main-content");
const close_btn = document.querySelector(".close");
const body = document.getElementsByTagName("body")[0];
console.log(body);


console.log(clickme);

function dropdown() {
  content.style.display = "flex";
  body.style.backdropFilter = "blur(5px)"
}

close_btn.addEventListener("click", function () {
  content.style.display = "none";
  if (confirm("ARE YOU SURE TO SUBMIT THIS SUGGESTION")) {
    window.location.reload();
    
  }
}); 
window.addEventListener("click", function (e) {
  if (e.target === content) {
    content.style.display = "none";
  }
});