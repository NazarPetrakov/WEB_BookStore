let textElement = document.getElementById("text");
let tooltipElement = document.getElementById("tooltip");

textElement.addEventListener("mouseover", function (event) {
  let tooltipText = "Це підказка для тексту вище ";
  showTooltip(event.clientX, event.clientY, tooltipText);
});

function showTooltip(x, y, text) {
  tooltipElement.innerHTML = text;
  tooltipElement.style.display = "block";
  tooltipElement.style.top = y + "px";
  tooltipElement.style.left = x + "px";
  tooltipElement.style.color = "red";
}

textElement.addEventListener("mouseout", function () {
  hideTooltip();
});

function hideTooltip() {
  tooltipElement.style.display = "none";
}
