document.addEventListener("DOMContentLoaded", () => {
    // Selección de elementos del DOM
    const tarjetas = document.querySelectorAll(".tarjeta");
    const modal = document.getElementById("modal-destino");
    const modalTitulo = document.getElementById("modal-titulo");
    const modalDescripcion = document.getElementById("modal-descripcion");
    const btnCerrar = document.querySelector(".close-btn");

    // Asignar evento click a cada tarjeta para abrir el modal de forma dinámica
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener("click", () => {
            const destino = tarjeta.getAttribute("data-destino");
            const info = tarjeta.getAttribute("data-info");

            // Inyectar datos en el modal
            modalTitulo.textContent = destino;
            modalDescripcion.textContent = info;

            // Mostrar modal agregando la clase CSS
            modal.classList.add("show");
        });
    });

    // Función para cerrar el modal de manera limpia
    const cerrarModal = () => {
        modal.classList.remove("show");
        // Timeout para ocultar el bloque tras la animación de desvanecimiento
        setTimeout(() => {
            if(!modal.classList.contains("show")) {
                modal.style.display = "none";
            }
        }, 300);
    };

    // Eventos de cierre del elemento interactivo
    btnCerrar.addEventListener("click", cerrarModal);

    // Cerrar también si el usuario hace click en cualquier parte fuera de la caja modal
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            cerrarModal();
        }
    });
});
