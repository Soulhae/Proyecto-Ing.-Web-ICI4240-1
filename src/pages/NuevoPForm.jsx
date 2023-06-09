import styles from "../styles/modules/NuevoPForm.module.scss";
import { useFormik } from "formik";
import { pSchema } from "../schemas/indexP";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import Header from "../components/Header.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../components/AppContext";

const NuevoPForm = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("");

    const { userInfo } = useContext(AppContext);

    //console.log(userInfo.userId);

    useEffect(() => {
        if (id != "") {
            navigate(`/imagesform/${id}`);
        }
    }, [id, navigate]);

    const onSubmit = async (values, actions) => {
        values.id_usuario = userInfo.userId;
        console.log(values);
        try {
            await pSchema.validate(values);
            axios
                .post("http://localhost:3000/nuevo_proyecto", values)
                .then((response) => {
                    const data = response.data.resultado.insertId;
                    // console.log(data);
                    setId(data);
                    // alert("Proyecto agregado exitosamente!");
                })
                .catch((error) => {
                    console.error(error);
                    alert(`Proyecto no fue agregado :( ${error.message}`);
                });
        } catch (error) {
            console.error(error);
        }
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
            id_usuario: "",
            titulo: "",
            portada: "",
            categoria: "",
            subcategoria: "",
            descripcion: "",
            fecha: "",
            objetivo: "",
            monto: "",
        },
        validationSchema: pSchema,
        onSubmit,
    });

    return (
        <>
            <Header />
            <Container>
                <div className={`m-auto my-5 ${styles.boxL}`}>
                    <form
                        id="formularioP"
                        onSubmit={handleSubmit}
                        autoComplete="off"
                    >
                        <h1>Crea tu proyecto</h1>

                        <Form.Group>
                            <Form.Label htmlFor="titulo">
                                Título del proyecto
                            </Form.Label>
                            <Form.Control
                                id="titulo"
                                type="text"
                                placeholder="Ingrese el título del proyecto"
                                value={values.titulo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.titulo && touched.titulo
                                        ? `${styles.inputerror}`
                                        : ""
                                }
                            />
                            {errors.titulo && touched.titulo && (
                                <p className={`${styles.errorMsg}`}>
                                    {errors.titulo}
                                </p>
                            )}
                        </Form.Group>

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
                                Imagen portada
                            </Form.Label>
                            <Form.Control
                                id="portada"
                                type="text"
                                placeholder="Ingrese el link de la imagen para la portada"
                                value={values.portada}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.portada && touched.portada
                                        ? `${styles.inputerror}`
                                        : ""
                                }
                            />
                        </Form.Group>
                        {errors.portada && touched.portada && (
                            <p className={`${styles.errorMsg}`}>
                                {errors.portada}
                            </p>
                        )}

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label
                                        style={{
                                            fontsize: "2rem",
                                            fontweight: "bold",
                                            display: "block",
                                            textalign: "left",
                                            margin: "0.5rem 0 0.2rem",
                                        }}
                                    >
                                        Categoría
                                    </Form.Label>
                                    <Form.Select
                                        id="categoria"
                                        type="select"
                                        value={values.categoria}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.categoria &&
                                            touched.categoria
                                                ? `${styles.inputerror}`
                                                : ""
                                        }
                                        style={{
                                            fontsize: "1rem",
                                            fontweight: "bold",
                                            display: "block",
                                            textalign: "left",
                                            margin: "1rem 0 0.2rem",
                                        }}
                                    >
                                        <option value="" disabled selected>
                                            -Seleccione una categoría-
                                        </option>
                                        <option>Arte</option>
                                        <option>Tecnologia</option>
                                        <option>Videojuegos</option>
                                    </Form.Select>
                                </Form.Group>
                                {errors.categoria && touched.categoria && (
                                    <p className={`${styles.errorMsg}`}>
                                        {errors.categoria}
                                    </p>
                                )}
                            </Col>

                            <Col>
                                <Form.Group>
                                    <Form.Label
                                        style={{
                                            fontsize: "2rem",
                                            fontweight: "bold",
                                            display: "block",
                                            textalign: "left",
                                            margin: "0.5rem 0 0.2rem",
                                        }}
                                    >
                                        Subcategoría
                                    </Form.Label>
                                    <Form.Select
                                        id="subcategoria"
                                        type="select"
                                        value={values.subcategoria}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.subcategoria &&
                                            touched.subcategoria
                                                ? `${styles.inputerror}`
                                                : ""
                                        }
                                        style={{
                                            fontsize: "1rem",
                                            fontweight: "bold",
                                            display: "block",
                                            textalign: "left",
                                            margin: "1rem 0 0.2rem",
                                        }}
                                    >
                                        <option value="" disabled selected>
                                            -Seleccione una subcategoría-
                                        </option>
                                        <option disabled>Arte</option>
                                        <option value="Arquitectura">
                                            Arquitectura
                                        </option>
                                        <option value="Cine">Cine</option>
                                        <option value="Danza">Danza</option>
                                        <option value="Escultura">
                                            Escultura
                                        </option>
                                        <option value="Literatura">
                                            Literatura
                                        </option>
                                        <option value="Música">Música</option>
                                        <option value="Pintura">Pintura</option>
                                        <option value="Teatro">Teatro</option>
                                        <option disabled>Tecnología</option>
                                        <option value="Ciberseguridad">
                                            Ciberseguridad
                                        </option>
                                        <option value="Informática">
                                            Informática
                                        </option>
                                        <option value="Inteligencia Artificial">
                                            Inteligencia Artificial
                                        </option>
                                        <option value="Realidad Virtual">
                                            Realidad Virtual
                                        </option>
                                        <option value="Robótica">
                                            Robótica
                                        </option>
                                        <option disabled>Videojuegos</option>
                                        <option value="Acción">Acción</option>
                                        <option value="Arcade">Arcade</option>
                                        <option value="Aventura">
                                            Aventura
                                        </option>
                                        <option value="Carreras">
                                            Carreras
                                        </option>
                                        <option value="Deportes">
                                            Deportes
                                        </option>
                                        <option value="Disparos">
                                            Disparos
                                        </option>
                                        <option value="Estrategía">
                                            Estrategía
                                        </option>
                                        <option value="Rol">Rol</option>
                                        <option value="Simulación">
                                            Simulación
                                        </option>
                                    </Form.Select>
                                </Form.Group>
                                {errors.subcategoria &&
                                    touched.subcategoria && (
                                        <p className={`${styles.errorMsg}`}>
                                            {errors.subcategoria}
                                        </p>
                                    )}
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                id="descripcion"
                                type="textarea"
                                value={values.descripcion}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                rows={4}
                                placeholder="Ingrese una descripción de su proyecto"
                                className={
                                    errors.descripcion && touched.descripcion
                                        ? `${styles.inputerror}`
                                        : ""
                                }
                            />
                        </Form.Group>
                        {errors.descripcion && touched.descripcion && (
                            <p className={`${styles.errorMsg}`}>
                                {errors.descripcion}
                            </p>
                        )}

                        <Form.Group>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                                id="fecha"
                                type="text"
                                value={values.fecha}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Indique cuando planea terminar el proyecto"
                                className={
                                    errors.fecha && touched.fecha
                                        ? `${styles.inputerror}`
                                        : ""
                                }
                            />
                        </Form.Group>
                        {errors.fecha && touched.fecha && (
                            <p className={`${styles.errorMsg}`}>
                                {errors.fecha}
                            </p>
                        )}

                        <Form.Group>
                            <Form.Label>Monto</Form.Label>
                            <Form.Control
                                id="monto"
                                type="text"
                                value={values.monto}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Indique el monto que necesita para realizar su proyecto"
                                className={
                                    errors.monto && touched.monto
                                        ? `${styles.inputerror}`
                                        : ""
                                }
                            />
                        </Form.Group>
                        {errors.monto && touched.monto && (
                            <p className={`${styles.errorMsg}`}>
                                {errors.monto}
                            </p>
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
        </>
    );
};

export default NuevoPForm;
