import styles from "../styles/modules/Register.module.scss";
import { useFormik } from "formik";
import { pSchema } from "../schemas/indexP";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

const NuevoPForm = () => {
    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {
        //console.log(values);
        //console.log(actions);
        axios
            .post("http://localhost:3000/usuarios", values)
            .then((response) => {
                console.log(response.data);
                alert("Registro exitoso!");
            })
            .catch((error) => {
                console.error(error);
                alert("Registro fallido :(");
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
            name: "",
        },
        validationSchema: pSchema,
        onSubmit,
    });

    //console.log(errors);

    return (
        <Container>
            <div className={`m-auto my-5 ${styles.boxL}`}>
                <form
                    id="formularioP"
                    onSubmit={handleSubmit}
                    autoComplete="off"
                >
                    <h1>Crea tu proyecto</h1>
                    <Form.Group>
                        <Form.Control
                            id="name"
                            type="string"
                            placeholder="Ingrese el nombre del proyecto"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.name && touched.name
                                    ? `${styles.inputerror}`
                                    : ""
                            }
                        ></Form.Control>
                        {errors.name && touched.name && (
                            <p className={`${styles.errorMsg}`}>
                                {errors.name}
                            </p>
                        )}
                        <Form.Select
                            htmlFor="username"
                            style={{
                                fontsize: "1rem",
                                fontweight: "bold",
                                display: "block",
                                textalign: "left",
                                margin: "1rem 0 0.2rem",
                            }}
                        >
                            <option value="" disabled selected>
                                -Seleccione un area-
                            </option>
                            <option>Videojuegos</option>
                            <option>Deportes</option>
                            <option>Entretenimiento</option>
                            <option>Tecnologia</option>
                            <option>Comidas</option>
                            <option>Musica</option>
                            <option>Arte</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Select
                            htmlFor="subarea"
                            style={{
                                fontsize: "1rem",
                                fontweight: "bold",
                                display: "block",
                                textalign: "left",
                                margin: "1rem 0 0.2rem",
                            }}
                        >
                            <option value="" disabled selected>
                                -Seleccione una sub-area-
                            </option>
                            <option>Videojuegos</option>
                            <option>Deportes</option>
                            <option>Entretenimiento</option>
                            <option>Tecnologia</option>
                            <option>Comidas</option>
                            <option>Musica</option>
                            <option>Arte</option>
                        </Form.Select>
                    </Form.Group>

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
};

export default NuevoPForm;
