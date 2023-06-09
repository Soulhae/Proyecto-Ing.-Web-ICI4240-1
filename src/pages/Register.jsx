import styles from "../styles/modules/Register.module.scss";
import { useFormik } from "formik";
import { basicSchema } from "../schemas/index";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from "react";
import { Button, Form, Container } from "react-bootstrap";
import Header from "../components/Header.jsx";

const Register = () => {
    const navigate = useNavigate();

    const [recaptchaResponse, setRecaptchaResponse] = useState(null);

    const captcha = useRef(null);

    const captchaChange = () =>{
        if(captcha.current.getValue()){
            setRecaptchaResponse(true);
        }
    }

    const onSubmit = async (values, actions) => {
        //console.log(values);
        //console.log(actions);
        if(captcha.current.getValue()){
            setRecaptchaResponse(true);
            axios
                .post("http://localhost:3000/registro", values)
                .then((response) =>{
                    console.log(response.data);
                    alert('Registro exitoso!');
                })
                .catch((error) => {
                    console.error(error);
                    alert(`Registro fallido :( ${error}`);
                });
            await new Promise((resolve) => setTimeout(resolve, 1000));
            actions.resetForm();
            navigate('/');
        }else{
            setRecaptchaResponse(false);
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
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            number: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    // console.log(errors);
    // console.log(values);

    return (
        <>
        <Header />
        <Container>
            <div className={`m-auto my-5 ${styles.boxL}`}>
                <Form
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
                        Nombre de Usuario
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
                        type="text"
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
                        <Button
                            className={styles.BotonLogin}
                            size="lg"
                            active
                            disabled={isSubmitting}
                            type="submit"
                        >
                            Registrarse
                        </Button>
                    </div>
                    <hr />
                    <p>
                        ¿Ya tienes una cuenta?{" "}
                        <Link to="/login">¡Inicia sesión!</Link>
                    </p>
                </Form>
                <div className={styles.recaptcha}>
                    <ReCAPTCHA 
                        ref={captcha}
                        sitekey="6Lcvj9EmAAAAAER-Go8gLZlvOhz7rl8croewTEYm"
                        onChange={captchaChange}
                    />
                </div>
                {recaptchaResponse === false &&
                <div className="mt-3">
                    <p className={styles.errorMsg}>Por favor, acepta el captcha</p>
                </div>
                }
            </div>
        </Container>
        </>
    );
};

export default Register;
