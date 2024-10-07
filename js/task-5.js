function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
button.addEventListener("click", () => {
  const body = document.body;

  const color = getRandomHexColor();
  body.style = `background-color: ${color};`;

  const span = document.querySelector(".color");
  span.textContent = color;
});
