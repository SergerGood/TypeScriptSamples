import validator from "./defaultCodeValidator";
import validateFunction from "./zipCodeValidator";

let myValidator = new validator();
let result = myValidator.isAccept("asd");

let strings = ["1", "2", "3"];
strings.forEach(s =>{
    console.log(`"${s}" ${validateFunction.apply(s) ? "match" : "does not match"}`);
});