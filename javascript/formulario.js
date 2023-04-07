function enviarEmail(miObjeto) {
    fetch("https://formsubmit.co/ajax/7df921cd772ebff3aa705d9c99a41f14", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(miObjeto)
    })
    .then(alert("Enviado con exicto"))
    .catch(error => console.log(error));
}

const form = document.getElementById("main-contacto__formulario");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const miObjeto = {
        nombre: formData.get("name"),
        asuto: formData.getAll("asunto"),
        email: formData.get("email"),
        mensaje: formData.getAll("mensaje"),
    }

    enviarEmail(miObjeto);
});


