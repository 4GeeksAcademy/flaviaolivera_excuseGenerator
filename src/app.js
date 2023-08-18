/* eslint-disable */
import "./style.css";
// Me ha parecido muy creativo el proyecto e integrando todos los contenidos,
// lo que pudiera aportar es halagos al trabajo, me ha encantado. Felicidades. Gracias, aprendo mucho contigo.
function generarExcusa() {
  let who = ["El perro", "Mi abuela", "Su tortuga", "Mi pájaro"];
  let action = ["se comió", "orinó", "aplastó", "rompió"];
  let what = ["mi tarea", "las llaves", "el coche"];
  let when = [
    "antes de la clase",
    "justo a tiempo",
    "cuando terminé",
    "durante mi almuerzo",
    "mientras estaba rezando"
  ];

  let quien = who[Math.floor(Math.random() * who.length)]; //Muy bien usar el length, yo puse numero directo jaj, aprendo de aqui.
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
