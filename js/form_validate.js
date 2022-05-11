$(document).ready(function() {
    $("#contact-form").validate({
      rules: {
        nombre : {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        },
        mensaje: {
            required: true,
            minlength: 3
        }
      },
      messages : {
        nombre: {
          minlength: "Name should be at least 3 characters"
        },
        email: {
            email: "Debe tener sintaxis de email"
        },
        mensaje: {
            required: "Ingrese texto del mensaje",
            minlength: "Largo min 3 caracteres"
        }
      }
    });
  });