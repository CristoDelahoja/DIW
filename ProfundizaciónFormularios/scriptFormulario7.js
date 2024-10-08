document.querySelector('form').addEventListener('submit', function (event) {

    let numeroAleatorio = Math.floor(Math.random() * 6);
    let colores = ['azul', 'verde', 'rojo', 'naranja', 'rosa', 'marrón'];
    let colorPensado = colores[numeroAleatorio];
    let colorSeleccionado = document.querySelector('select[name="color"]').value;

    if (colorSeleccionado !== colorPensado) {
        alert("Incorrecto, el color pensado era " + colorPensado + ". Inténtalo de nuevo.");
        event.preventDefault();
    } else {
        alert("Correcto, el color pensado era " + colorPensado);
    }
});