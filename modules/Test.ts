///<reference path="node.d.ts"/>

import validator from "./defaultCodeValidator";
import validateFunction from "./zipCodeValidator";

import * as URL from "url" 

let myValidator = new validator();
let result = myValidator.isAccept("asd");

let strings = ["1", "2", "3"];
strings.forEach(s =>{
    console.log(`"${s}" ${validateFunction.apply(s) ? "match" : "does not match"}`);
});

let myUrl = URL.parse("http://www.google.com");