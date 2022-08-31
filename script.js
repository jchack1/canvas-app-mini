const cursor = document.querySelector("[data-cursor]");
const canvas = document.querySelector("[data-canvas]");

let mousePositionX;
let mousePositionY;

canvas.addEventListener("mousemove", (event) => {
  const {clientX, clientY} = event;
  const displacementX = canvas.getBoundingClientRect().x;
  const displacementY = canvas.getBoundingClientRect().y;

  mousePositionX = clientX - displacementX;
  mousePositionY = clientY - displacementY;

  cursor.setAttribute("cx", mousePositionX);
  cursor.setAttribute("cy", mousePositionY);
});

canvas.addEventListener("click", (event) => {
  d3.select("[data-canvas]")
    .append("circle")
    .attr("r", 50)
    .attr("cx", mousePositionX)
    .attr("cy", mousePositionY)
    .attr("width", 700)
    .attr("height", 500)
    .attr("stroke", "black")
    .attr("fill", "black");
});
