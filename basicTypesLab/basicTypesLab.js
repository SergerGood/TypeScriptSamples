var usedColor = "green";
var squareSizeNumber = 100;
var squareSize = squareSizeNumber + "px";
var button = document.createElement("button");
button.textContent = "Change Color";
document.body.appendChild(button);
var div = document.createElement("div");
document.body.appendChild(div);
div.style.height = squareSize;
div.style.width = squareSize;
var colorChange = function (element, color) {
    element.style.backgroundColor = color;
    return true;
};
button.onclick = function () {
    colorChange(div, usedColor);
};
//# sourceMappingURL=basicTypesLab.js.map