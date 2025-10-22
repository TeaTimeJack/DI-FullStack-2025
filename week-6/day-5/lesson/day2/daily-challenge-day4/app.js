// const { greet } = require("./helpers/greeting.js");
import { greet } from "./helpers/greeting.cjs";
import {
  displayColorMeaage,
  displayErrorMessage,
} from "./helpers/colorful-message.js";
import { read_file } from "./helpers/read-file.js";

console.log(displayColorMeaage("Tom"));
console.log(displayErrorMessage("Opps... something went wrong!!!"));

console.log(greet("John"));

try {
  const data = await read_file("./files/file-data.txt");
  console.log(displayColorMeaage(data));
} catch (error) {
  console.log(displayErrorMessage(error.message));
}
// console.log('after');
