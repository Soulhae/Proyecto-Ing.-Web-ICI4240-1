$( "#form" ).validate({
    rules:{
        user:{
            required:true,
            maxlength:30,
            solo_letras:true
        },
        contrasenya:{
            required:true,
            minlength: 8
        },
        email:{
            field: {
            required: true,
            email: true
            }
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
        }
    },

    submitHandler: function(form) {
        window.alert("Envio exitoso");
        $(form).ajaxSubmit();
    }
});

jQuery.validator.addMethod("solo_letras", function(value, element) 
{
    return /^[a-z," "]+$/i.test(value);
}, "Debe ingresar solo letras");

jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
});
