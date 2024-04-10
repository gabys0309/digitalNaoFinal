document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del formulario y al formulario mismo
    var nombreInput = document.getElementById('nombre');
    var correoInput = document.getElementById('correo');
    var formulario = document.getElementById('registroForm');

    // Agregar un event listener para el botón de enviar del formulario
    document.getElementById('enviarBtn').addEventListener('click', function(event) {
        if (!formulario.checkValidity()) {
            // Si el formulario no es válido, mostrar mensaje de error
            event.preventDefault(); // Evitar que el formulario se envíe
            event.stopPropagation(); // Detener la propagación del evento
            alert('Por favor, completa todos los campos correctamente.'); // Mostrar mensaje de error
            formulario.classList.add('was-validated'); // Agregar una clase para mostrar los mensajes de validación
        } else {
            // Si todo está bien, limpiar los inputs y enviar el formulario
            formulario.reset(); // Limpiar el formulario
            alert('¡Formulario enviado correctamente!'); // Mostrar mensaje de éxito
            // Aquí podrías redirigir al usuario a la página deseada
        }
    });
});
