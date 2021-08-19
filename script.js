const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", () => {toggleClass(cell)})
  })


const toggleClass = (cell) => {
  cell.classList.toggle("cell")
  cell.classList.toggle("cell--active")
}