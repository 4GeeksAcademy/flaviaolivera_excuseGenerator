/* eslint-disable */
import "./style.css";

function generarExcusa() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let quien = who[Math.floor(Math.random() * who.length)];
  let accion = action[Math.floor(Math.random() * action.length)];
  let que = what[Math.floor(Math.random() * what.length)];
  let cuando = when[Math.floor(Math.random() * when.length)];
  let excusa = quien + " " + accion + " " + que + " " + cuando;

  alert("Aquí tienes la mejor excusa: " + excusa);
}

document.addEventListener("DOMContentLoaded", function() {
  document
    .querySelector("#generate-excuse-btn")
    .addEventListener("click", generarExcusa);
});
