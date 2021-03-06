"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrayUtils_1 = require("./arrayUtils");
var array1 = [1, 2, 3, 4, 5];
var array2 = [6, 7, 8, 9, 10];
function callArrayUtil(util, array, array2) {
    if (array2 === void 0) { array2 = null; }
    document.getElementById("output").innerHTML = arrayUtils_1.default[util](array, array2).toString();
}
$.each(arrayUtils_1.default, function (property, index) {
    document.getElementById(property).onclick = function () {
        callArrayUtil(property, array1, array2);
    };
});
document.getElementById("output").innerHTML = array1.toString();
//# sourceMappingURL=main.js.map