$( "#form" ).validate({
    rules:{
        user:{
            required:true,
            maxlength:30,
        },
        contrasenya:{
            required:true,
            minlength: 8
        },
        email:{
            required: true,
            email: true
        },
        recontrasenya: {
            minlength: 8,
            equalTo: "#password"
        }

    },

    messages:{
        user:{
            required:"favor ingrese un nombre de usuario",
            maxlength:"El nombre de usuario no puede superar los 12 caracteres"
        },
        contrasenya:{
            required:"Por favor ingrese una contraseña",
            minlength:"La contraseña tiene que tener minimo 8 caracteres"
        },
        recontrasenya:{
            minlength:"Ingrese minimo 8 caracteres",
            equalTo:"Ingrese la misma contraseña"
        },
        email:{
            email:"Ingrese un email valido"
        }

    },

    submitHandler: function(form) {
        window.alert("Envio exitoso");
        $(form).ajaxSubmit();
    }
});