const container = document.querySelector("#container");
let gridSize = 16;

const createSquare = () => {
  const createSquare = document.createElement("div");
  createSquare.setAttribute("id", "square");
  container.appendChild(createSquare);
  createSquare.style.height = `${600 / gridSize}px`;
  createSquare.style.width = `${600 / gridSize}px`;
};
const createGrid = () => {
  for (let i = 0; i < gridSize ** 2; i++) {
    createSquare();
  }
};

const mouseOver = () => {
  const square = document.querySelectorAll("div#square");
  square.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });
  });
};

createGrid();
mouseOver();

const removeGrid = () => {
  for (let i = 0; i < gridSize ** 2; i++) {
    document.getElementById("square").remove();
  }
};

const button = document.querySelector("button");

button.addEventListener("click", () => {
  removeGrid();
  changeGridSize();
  mouseOver();
});

const changeGridSize = () => {
  gridSize = parseInt(
    prompt("Enter a number between 16 and 100 for a new grid")
  );
  while (isNaN(gridSize) || gridSize < 16 || gridSize > 100) {
    if ((gridSize = " ")) {
      gridSize = 16;
      break;
    } else {
      gridSize = parseInt(
        prompt("Enter a number between 16 and 100 for a new grid")
      );
    }
  }
  createGrid();
};
