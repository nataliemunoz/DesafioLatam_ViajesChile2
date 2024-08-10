import'../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

let boton = document.getElementById('btn1');

boton.onclick=function(e){
    alert("La información fue correctamente enviada, gracias por tu visita.");
}