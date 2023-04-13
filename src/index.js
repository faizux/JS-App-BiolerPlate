import "./index.css";
import numeral from "numeral"; // for formatting numbers

const courseValue = numeral(1000).format("$0,0.00");
console.log(`i would pay ${courseValue} for this awesome course`); //eslint-disable-line no-console
