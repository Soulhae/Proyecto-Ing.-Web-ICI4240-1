import * as yup from 'yup';

const passwordRules= /^(?=.*\d)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const basicSchema = yup.object().shape({
    email : yup.string().email("Debe ser un email valido").required("Email requerido"),
    username: yup.string().required("Usuario es requerido"),
    password: yup.string().min(7, "La contraseña debe tener 8 caracteres o más").matches(passwordRules, {message: "Ingrese una contraseña valida (Mínimo: 8 caracteres mezclando mayus, minus y números)"}).required("Requerida"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Las contraseñas no coinciden"),
    number : yup.number().positive().integer().required("Numero requerido"),
});