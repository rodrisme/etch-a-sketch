const container = document.querySelector("#container");
let size = 16;

const createSquares = () => {
  const createSquare = document.createElement("div");
  createSquare.setAttribute("id", "square");
  container.appendChild(createSquare);
};

for (let i = 0; i < size ** 2; i++) {
  createSquares();
}

const test = document.querySelectorAll("div#square");
test.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "black";
  });
});

const button = document.querySelector("button");

button.addEventListener("click", grid);

function grid() {
  size = prompt("Enter new grid size");
}
