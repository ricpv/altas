import { clientServices } from "../services/client-service.js";

const formulario = document.querySelector("[data-form]");

// recibe 2 parametros
// el 1ero. el tipo de evento que quieres escuchar
// el 2do. una funcion que se va a disparar una vez que se cumpla la condicion
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre =  document.querySelector("[data-nombre]").value
    const email =  document.querySelector("[data-email]").value
    clientServices
    .crearCliente(nombre, email)
    .then(()   => {
    window.location.href= "/screens/registro_completado.html"
    })
    .catch((err) => console.log (err))
});