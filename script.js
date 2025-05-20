function toggleModoNoche() {
    const body = document.body;
    const activado = !body.classList.contains("modo-noche");

    body.classList.toggle("modo-noche", activado);
    localStorage.setItem("modoNoche", activado);

    const toggle = document.getElementById("modoNocheToggle");
    if (toggle) toggle.checked = activado;
    }

    function aplicarModoNocheGuardado() {
    const activado = localStorage.getItem("modoNoche") === "true";
    if (activado) {
        document.body.classList.add("modo-noche");
        const toggle = document.getElementById("modoNocheToggle");
        if (toggle) toggle.checked = true;
    }
    }

    document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.querySelectorAll(".imagenes img");

    imagenes.forEach((img) => {
        img.style.transition = "transform 0.3s ease";
        img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.1)";
        });
        img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
        });
    });
    });


    document.addEventListener("DOMContentLoaded", () => {
    const fraseElemento = document.getElementById("frase-motivadora");
    const frasePorDefecto = "Disfruta el sabor, comparte el momento";

    async function obtenerCita() {
        try {
        const response = await fetch("https://api.quotable.io/random");
        if (!response.ok) throw new Error("Error en la respuesta de la API");
        const data = await response.json();
        fraseElemento.innerHTML = `"${data.content}" — ${data.author}`;
        } catch (error) {
        console.error("Error al obtener la cita:", error);
        fraseElemento.textContent = frasePorDefecto;
        }
    }

    obtenerCita();
    setInterval(obtenerCita, 30000);
});