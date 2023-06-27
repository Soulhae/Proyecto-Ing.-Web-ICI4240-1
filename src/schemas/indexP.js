import * as yup from 'yup';

//const passwordRules= /^(?=.*\d)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const pSchema = yup.object().shape({
    titulo : yup.string().min(4, "Minimo 4 caracteres o más").required("Añade un nombre al proyecto"),
    portada : yup.string().url("Ingrese un url valido").required("Añade una imagen al proyecto"),
    categoria: yup.string().required("Categoria es requerida"),
    subcategoria: yup.string().required("Subcategoria es requerida"),
    descripcion: yup.string().min(20,"Se requiere una descripcion más amplia").max(100,"Sea un poco mas breve").required("Descripcion es requerida"),
    fecha : yup.string().required("Ingrese una fecha"),
    objetivo : yup.string().required("Ingrese un monto"),
});