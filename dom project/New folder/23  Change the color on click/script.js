const colorButton = document.getElementById("color-button");

const colors = ["#e74c3c", "#8e44ad", "#3498db", "#27ae60", "#f1c40f", "#e67e22", "#2c3e50", "#2ecc71", "#34495e", "#d35400"];

colorButton.addEventListener("click", function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
