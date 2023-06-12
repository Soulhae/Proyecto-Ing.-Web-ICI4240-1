import styles from "../styles/modules/Register.module.scss";
import { useFormik } from "formik";
import { basicSchema } from "../schemas/index";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

const Register = () => {

    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {
        //console.log(values);
        //console.log(actions);
        axios
            .post("http://localhost:3000/usuarios", values)
            .then((response) => {
                //console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
        alert('Registro exitoso!');
        navigate('/');
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
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            number: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    //console.log(errors);

    return (

        <Container>
            <div className={`m-auto my-5 ${styles.boxL}`}>
                <form
                    id="formulario"
                    onSubmit={handleSubmit}
                    autoComplete="off"
                >
                    <h1>Registrarse</h1>
                    <Form.Group>
                    <Form.Label
                        htmlFor="email"
                        style={{
                            fontsize: "1rem",
                            fontweight: "bold",
                            display: "block",
                            textalign: "left",
                            margin: "1rem 0 0.2rem",
                        }}
                    >
                        Email
                    </Form.Label>
                    <Form.Control
                        id="email"
                        type="email"
                        placeholder="Ingrese su email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            errors.email && touched.email
                                ? `${styles.inputerror}`
                                : ""
                        }
                    ></Form.Control>
                    </Form.Group>
                    {errors.email && touched.email && (
                        <p className={`${styles.errorMsg}`}>{errors.email}</p>
                    )}
                    <Form.Label
                        htmlFor="username"
                        style={{
                            fontsize: "1rem",
                            fontweight: "bold",
                            display: "block",
                            textalign: "left",
                            margin: "1rem 0 0.2rem",
                        }}
                    >
                        Usuario
                    </Form.Label>
                    <Form.Control
                        id="username"
                        type="username"
                        placeholder="Ingrese un usuario"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            errors.username && touched.username
                                ? `${styles.inputerror}`
                                : ""
                        }
                    ></Form.Control>
                    {errors.username && touched.username && (
                        <p className={`${styles.errorMsg}`}>
                            {errors.username}
                        </p>
                    )}
                    <Form.Label
                        htmlFor="password"
                        style={{
                            fontsize: "1rem",
                            fontweight: "bold",
                            display: "block",
                            textalign: "left",
                            margin: "1rem 0 0.2rem",
                        }}
                    >
                        Contraseña
                    </Form.Label>
                    <Form.Control
                        id="password"
                        type="password"
                        placeholder="Ingrese una contraseña"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            errors.password && touched.password
                                ? `${styles.inputerror}`
                                : ""
                        }
                    ></Form.Control>
                    {errors.password && touched.password && (
                        <p className={`${styles.errorMsg}`}>
                            {errors.password}
                        </p>
                    )}
                    <Form.Label
                        htmlFor="confirmPassword"
                        style={{
                            fontsize: "1rem",
                            fontweight: "bold",
                            display: "block",
                            textalign: "left",
                            margin: "1rem 0 0.2rem",
                        }}
                    >
                        Reingresar contraseña
                    </Form.Label>
                    <Form.Control
                        id="confirmPassword"
                        type="password"
                        placeholder="Reingrese la contraseña"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            errors.confirmPassword && touched.confirmPassword
                                ? `${styles.inputerror}`
                                : ""
                        }
                    ></Form.Control>
                    {errors.confirmPassword && touched.confirmPassword && (
                        <p className={`${styles.errorMsg}`}>
                            {errors.confirmPassword}
                        </p>
                    )}
                    <Form.Label
                        htmlFor="number"
                        style={{
                            fontsize: "1rem",
                            fontweight: "bold",
                            display: "block",
                            textalign: "left",
                            margin: "1rem 0 0.2rem",
                        }}
                    >
                        Número telefonico
                    </Form.Label>
                    <Form.Control
                        id="number"
                        type="number"
                        placeholder="Ingrese su número telefonico"
                        value={values.number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            errors.number && touched.number
                                ? `${styles.inputerror}`
                                : ""
                        }
                    ></Form.Control>
                    {errors.number && touched.number && (
                        <p className={`${styles.errorMsg}`}>{errors.number}</p>
                    )}
                    <div className="d-grid gap-2">
                    <Button className={styles.BotonLogin} size="lg" active disabled={isSubmitting} type="submit">
                        Registrarse
                    </Button>
                    </div>
                    <hr />
                    <p>
                        ¿Ya tienes una cuenta?
                        <Link to="/login">¡Inicia sesión!</Link>
                    </p>
                </form>
            </div>
        </Container>
    );
};

export default Register;
