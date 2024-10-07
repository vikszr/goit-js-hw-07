function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.push(div);
  }
  return boxes;
}

function destroyBoxes() {
  divForBoxes.innerHTML = "";
}

const controls = document.querySelector("#controls");
const divForBoxes = document.querySelector("#boxes");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");

createBtn.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    const boxes = createBoxes(amount);
    divForBoxes.append(...boxes);
    input.value = "";
  }
});

destroyBtn.addEventListener("click", destroyBoxes);
