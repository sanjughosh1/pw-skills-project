const image = document.getElementById("image");
let positionX = 0;
let positionY = 0;

document.addEventListener("keydown", function(event) {
  switch(event.key) {
    case "ArrowLeft":
      positionX -= 10;
      break;
    case "ArrowUp":
      positionY -= 10;
      break;
    case "ArrowRight":
      positionX += 10;
      break;
    case "ArrowDown":
      positionY += 10;
      break;
  }
  image.style.transform = `translate(${positionX}px, ${positionY}px)`;

  console.log(positionX)
  console.log(positionY)
});


