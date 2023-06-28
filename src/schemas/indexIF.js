import * as yup from 'yup';

const passwordRules= /^(?=.*\d)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const IFSchema = yup.object().shape({
    imagen: yup.string().url("Ingrese un URL válido").required("Añade una imagen al proyecto"),
  });