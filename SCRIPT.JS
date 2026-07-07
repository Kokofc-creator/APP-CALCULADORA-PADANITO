function calcular() {
let v1 = document.getElementById("valor1").value;
let v2 = document.getElementById("valor2").value;
let v3 = document.getElementById("valor3").value;

let resultado = (v2 * v3) / v1;

document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function limpiar() {
location.reload();
}

// ACTIVAR PWA
if ("serviceWorker" in navigator) {
navigator.serviceWorker.register("service-worker.js");
}
