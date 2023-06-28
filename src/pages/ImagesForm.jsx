import styles from "../styles/modules/ImagesForm.module.scss";
import { useFormik } from "formik";
import { IFSchema } from "../schemas/indexIF";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Button, Form, } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

function ImagesForm() {
    const params = useParams();
    console.log(params);

    const navigate = useNavigate();
    const [isUrlEntered, setIsUrlEntered] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const onSubmit = async (values, actions) => {
        const newValues = {
          ...values,
          id: params.id,
          url: values.imagen,
        };
      
        axios
          .post("http://localhost:3000/imagen", newValues)
          .then((response) => {
            console.log(response.data);
            alert("Imagen/es agregadas exitosamente!");
            setIsFormSubmitted(true);
          })
          .catch((error) => {
            console.error(error);
            alert(`Imagen/es no fueron agregadas :( ${error.message}`);
          });
      
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
      };

    const handleImageChange = (event) => {
        const { name, value } = event.target;
        setIsUrlEntered(value.trim() !== "");
        handleChange(event); 
    };

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
    } = useFormik({
        initialValues: {
            imagen: "",
            imagen2: "",
            imagen3: "",
            imagen4: "",
            imagen5: "",
        },
        validationSchema: IFSchema,
        onSubmit,
    });

    useEffect(() => {
        if (isFormSubmitted) {
            setIsFormSubmitted(false);
            resetForm();
        }
    }, [isFormSubmitted, resetForm]);

    return (
        <Container>
            <div className={`m-auto my-5 ${styles.boxL}`}>
                <form
                    id="formularioP"
                    onSubmit={handleSubmit}
                    autoComplete="off"
                >
                    <h1>¡Ya casi!</h1>

                    <Form.Group type="text" className="mb-3">
                        <Form.Label
                            style={{
                                fontsize: "2rem",
                                fontweight: "bold",
                                display: "block",
                                textalign: "left",
                                margin: "0.5rem 0 0.2rem",
                            }}
                        >
                            Añada más imágenes del proyecto
                        </Form.Label>
                        <Form.Control
                            id="imagen"
                            name="imagen"
                            type="text"
                            placeholder="Ingrese el link de la imagen para la portada"
                            value={values.imagen}
                            onChange={handleImageChange}
                            onBlur={handleBlur}
                            className={
                                errors.imagen && touched.imagen
                                    ? `${styles.inputerror}`
                                    : ""
                            }
                        />
                    </Form.Group>
                    {errors.imagen && touched.imagen && (
                        <p className={`${styles.errorMsg}`}>{errors.imagen}</p>
                    )}

                    <div className="d-grid gap-2">
                        <Button
                            className={styles.BotonLogin}
                            size="lg"
                            active
                            disabled={isSubmitting || isFormSubmitted}
                            type="submit"
                        >
                            Agregar
                        </Button>
                        <Button
                            className={styles.BotonLogin}
                            size="lg"
                            active
                            disabled={!isFormSubmitted}
                            onClick={() => resetForm()}
                        >
                            Terminar
                        </Button>
                    </div>
                    <hr />
                </form>
            </div>
        </Container>
    );
}

export default ImagesForm;
