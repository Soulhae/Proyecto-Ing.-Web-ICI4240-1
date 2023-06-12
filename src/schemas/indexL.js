import * as yup from 'yup';

const passwordRules= /^(?=.*\d)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const lSchema = yup.object().shape({
    email : yup.string().email("Debe ser un email valido").required("Email requerido"),
    password: yup.string().min(7, "La contraseña debe tener 8 caracteres o más").matches(passwordRules, {message: "Ingrese una contraseña valida"}).required("Requerida"),
});