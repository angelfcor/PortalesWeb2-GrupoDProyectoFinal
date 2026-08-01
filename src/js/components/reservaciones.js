export function initReservaciones() {

    const formulario = document.getElementById("formReserva");

    if (!formulario) return;

    formulario.addEventListener("submit", (e) => {

        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const telefono = document.getElementById("telefono").value;
        const habitacion = document.getElementById("habitacion").value;
        const entrada = document.getElementById("entrada").value;
        const salida = document.getElementById("salida").value;

        if (!nombre || !correo || !telefono || !habitacion || !entrada || !salida) {
            alert("Complete todos los campos.");
            return;
        }

        alert("¡Reservación enviada con éxito!");
        formulario.reset();

    });

}