import Addition from "../models/addition.js"
import subtraction from "../models/subtraction.js";

let plus = new Addition(3,5)
let minus = new subtraction(8,5)

let adding = plus.add()
let subtracting = minus.subtract()
console.log(adding);
console.log(subtracting);

