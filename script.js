// ===============================
// RECONECTA
// GUARDAR PERFIL
// ===============================

const boton = document.getElementById("guardar");

if (boton) {

    // Si ya existen datos, los vuelve a mostrar
    document.getElementById("nombre").value =
        localStorage.getItem("nombre") || "";

    document.getElementById("edad").value =
        localStorage.getItem("edad") || "";

    document.getElementById("sexo").value =
        localStorage.getItem("sexo") || "";

    document.getElementById("zorrito").value =
        localStorage.getItem("zorrito") || "";

    boton.addEventListener("click", () => {

        const nombre = document.getElementById("nombre").value.trim();
        const edad = document.getElementById("edad").value.trim();
        const sexo = document.getElementById("sexo").value;
        const zorrito = document.getElementById("zorrito").value.trim();

        if(nombre==="" || edad==="" || sexo==="" || zorrito===""){
            alert("Completa todos los datos.");
            return;
        }

        localStorage.setItem("nombre",nombre);
        localStorage.setItem("edad",edad);
        localStorage.setItem("sexo",sexo);
        localStorage.setItem("zorrito",zorrito);

        // Monedas iniciales
        if(localStorage.getItem("coins")==null){
            localStorage.setItem("coins",0);
        }

        // Fondo inicial
        if(localStorage.getItem("fondo")==null){
            localStorage.setItem("fondo","#ffd6e7");
        }

        alert("¡Perfil guardado correctamente! 🦊💖");

        window.location.href="zorrito.html";

    });

}
