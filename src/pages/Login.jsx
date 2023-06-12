import styles from "../styles/modules/Login.module.scss";
import { useFormik } from "formik";
import { lSchema } from "../schemas/indexL";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const Login = () => {

    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {
        //console.log(values);
        //console.log(actions);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
        navigate('/'); //Quizá enviar al usuario a su perfil luego de logear
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
            password: "",
        },
        validationSchema: lSchema,
        onSubmit,
    });

    //console.log(errors);

    return (
        <Container>
            <div className={`m-auto my-5 ${styles.boxL}`}>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <h1>Iniciar sesión</h1>
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

                    {errors.email && touched.email && (
                        <p className={`${styles.errorMsg}`}>{errors.email}</p>
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
                    <div className="d-grid gap-2">
                        <Button
                            className={styles.BotonLogin}
                            size="lg"
                            active
                            disabled={isSubmitting}
                            type="submit"
                        >
                            Iniciar Sesion
                        </Button>
                    </div>
                    <hr />
                    <p>
                        ¿Nuevo usuario? <Link to="/register">¡Registrate!</Link>
                    </p>
                </form>
            </div>
        </Container>
    );
};

export default Login;
