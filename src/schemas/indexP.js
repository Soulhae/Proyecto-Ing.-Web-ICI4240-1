import * as yup from 'yup';

//const passwordRules= /^(?=.*\d)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const pSchema = yup.object().shape({
    name : yup.string().min(4, "Minimo 4 caracteres o más").required("Añade un nombre al proyecto"),
});