import "./styles.css";

const isNull = (elem) => elem === null;

let fangs = [...Array(6)]
  .map((u, i) => i)
  .map((item) => {
    let fang = `<div class="fang${item === 0 ? "" : item}"></div>`;
    return `${fang}\n${fang}`;
  })
  .join("\n");

let lower_chin = [...Array(5)]
  .map((u, i) => i)
  .map((item) => {
    let lower_chin_tooth = `<div class="lower_chin_tooth${item}"></div>`;
    return `${lower_chin_tooth}\n${lower_chin_tooth}`;
  })
  .join("\n");

let teeth =
  fangs +
  [...Array(7)]
    .map((u, i) => i)
    .map((item) => {
      let tooth = `<div class="tooth${item === 0 ? "" : item}"></div>`;
      return `${tooth}\n${tooth}`;
    })
    .join("\n") +
  lower_chin;

if (!isNull(document.getElementById("teeth"))) {
  document.getElementById("teeth").innerHTML = teeth;
}
