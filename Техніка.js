const element = document.getElementById("animated-element");

function animateElement() {
  element.style.transform = "translateX(200px)";
}

element.addEventListener("click", animateElement);