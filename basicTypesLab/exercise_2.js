var colorChange2 = (function () {
    function colorChange2(div) {
        this.div = div;
    }
    colorChange2.prototype.change = function (color) {
        this.div.style.backgroundColor = color;
        return true;
    };
    return colorChange2;
}());
var Colors;
(function (Colors) {
    Colors[Colors["Green"] = 0] = "Green";
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Black"] = 3] = "Black";
})(Colors || (Colors = {}));
var squareSizeNumber2 = 100;
var squareSize2 = squareSizeNumber2 + "px";
var elementSets = [];
var Elements = {
    "div": document.createElement("div"),
    "button": document.createElement("button")
};
for (var index = 0; index < 4; index++) {
    elementSets.push({
        "div": document.createElement("div"),
        "button": document.createElement("button")
    });
}
elementSets.map(function (element, index) {
    var colorChange = new colorChange2(element.div);
    element.div.style.width = squareSize2;
    element.div.style.height = squareSize2;
    element.button.textContent = "Change Color";
    element.button.onclick = function (event) {
        colorChange.change(Colors[index]);
    };
    document.body.appendChild(element.div);
    document.body.appendChild(element.button);
});
