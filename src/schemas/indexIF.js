import * as yup from 'yup';

const passwordRules= /^(?=.*\d)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const IFSchema = yup.object().shape({
    imagen: yup.string().url("Ingrese un URL válido").required("Añade una imagen al proyecto"),
    imagen2: yup.string().url("Ingrese un URL válido"),
    imagen3: yup.string().url("Ingrese un URL válido"),
    imagen4: yup.string().url("Ingrese un URL válido"),
    imagen5: yup.string().url("Ingrese un URL válido"),
  });