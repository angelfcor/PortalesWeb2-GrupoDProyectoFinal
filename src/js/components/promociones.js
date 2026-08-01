export function initPromociones() {

    const botones = document.querySelectorAll(".btn");

    botones.forEach((boton) => {

        boton.addEventListener("click", () => {
            console.log("Redirigiendo a reservaciones...");
        });

    });

}