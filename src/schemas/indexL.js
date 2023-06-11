import * as yup from 'yup';

const passwordRules= /^(?=.*\d)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const basicSchema = yup.object().shape({
    email : yup.string().email("Debe ser un email valido").required("email requerido"),
    password: yup.string().min(5).matches(passwordRules, {message: "Ingrese una contraseña valida"}).required("Requerida"),

});