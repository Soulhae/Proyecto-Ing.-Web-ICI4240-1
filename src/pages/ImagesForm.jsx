import styles from "../styles/modules/ImagesForm.module.scss";
import { useFormik } from "formik";
import { IFSchema } from "../schemas/indexIF";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import React, { useState } from "react";

function ImagesForm() {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    console.log(values);
    //console.log(actions);
    axios
      .post("http://localhost:3000/imagen", values)
      .then((response) => {
        console.log(response.data);
        alert("Imagen/es agregadas exitosamente!");
      })
      .catch((error) => {
        console.error(error);
        alert(`Imagen/es no fueron agregadas :( ${error.message}`);
      });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    navigate("/");
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
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

  return (
    <Container>
      <div className={`m-auto my-5 ${styles.boxL}`}>
        <form id="formularioP" onSubmit={handleSubmit} autoComplete="off">
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
              Añada más imagenes del proyecto
            </Form.Label>
            <Form.Control
              id="imagen"
              type="text"
              placeholder="Ingrese el link de la imagen para la portada"
              value={values.imagen}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.imagen && touched.imagen ? `${styles.inputerror}` : ""
              }
            />
          </Form.Group>
          {errors.imagen && touched.imagen && (
            <p className={`${styles.errorMsg}`}>{errors.imagen}</p>
          )}



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
              Añada más imagenes del proyecto (*)
            </Form.Label>
            <Form.Control
              id="imagen2"
              type="text"
              placeholder="Ingrese el link de la imagen para la portada"
              value={values.imagen2}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.imagen2 && touched.imagen2 ? `${styles.inputerror}` : ""
              }
            />
          </Form.Group>
          {errors.imagen2 && touched.imagen2 && (
            <p className={`${styles.errorMsg}`}>{errors.imagen2}</p>
          )}


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
              Añada más imagenes del proyecto (*)
            </Form.Label>
            <Form.Control
              id="imagen3"
              type="text"
              placeholder="Ingrese el link de la imagen para la portada"
              value={values.imagen3}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.imagen3 && touched.imagen3 ? `${styles.inputerror}` : ""
              }
            />
          </Form.Group>
          {errors.imagen3 && touched.imagen3 && (
            <p className={`${styles.errorMsg}`}>{errors.imagen3}</p>
          )}

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
              Añada más imagenes del proyecto (*)
            </Form.Label>
            <Form.Control
              id="imagen4"
              type="text"
              placeholder="Ingrese el link de la imagen para la portada"
              value={values.imagen4}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.imagen4 && touched.imagen4 ? `${styles.inputerror}` : ""
              }
            />
          </Form.Group>
          {errors.imagen4 && touched.imagen4 && (
            <p className={`${styles.errorMsg}`}>{errors.imagen4}</p>
          )}

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
              Añada más imagenes del proyecto (*)
            </Form.Label>
            <Form.Control
              id="imagen5"
              type="text"
              placeholder="Ingrese el link de la imagen para la portada"
              value={values.imagen5}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.imagen5 && touched.imagen5 ? `${styles.inputerror}` : ""
              }
            />
          </Form.Group>
          {errors.imagen5 && touched.imagen5 && (
            <p className={`${styles.errorMsg}`}>{errors.imagen5}</p>
          )}

          <div className="d-grid gap-2">
            <Button
              className={styles.BotonLogin}
              size="lg"
              active
              disabled={isSubmitting}
              type="submit"
            >
              Crear
            </Button>
          </div>
          <hr />
        </form>
      </div>
    </Container>
  );
}

export default ImagesForm;
