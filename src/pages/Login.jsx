import styles from "../styles/modules/Login.module.scss";
import { useFormik } from "formik";
import { lSchema } from "../schemas/indexL";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button, Form } from "react-bootstrap";
import axios from "axios";
import { AppContext } from "../components/AppContext.jsx";
import { useContext } from "react";
import Header from "../components/Header.jsx";

const Login = () => {
    const navigate = useNavigate();
    const { updateUserInfo } = useContext(AppContext);

    const onSubmit = async (values, actions) => {
        //console.log(values);
        //console.log(actions);
        let test = [];
        axios
            .post("http://localhost:3000/inicio-sesion", values)
            .then((response) =>{
                //console.log(response.data);
                test = response.data;
                // console.log(test.datos.id + "id");
                // console.log(test.datos.id_rol + "id_rol");
                updateUserInfo(test.datos.id_rol, test.datos.id);
            })
            .catch((error) =>{
                console.error(error);
                updateUserInfo(null, null);
                alert(`Su usuario no se encuentra registrado`);
                navigate("/register");
            });

        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
        //si es admin mandar a perfilAdmin, si es usuario a perfil (if get)
        if(test.datos.id_rol && test.datos.id_rol === 1){
            navigate("/funcionadmin");
        }else if(test.datos.id_rol && test.datos.id_rol === 2){
            navigate("/perfilusuario");
        }else{
            navigate("/register");
            alert('Su usuario no se encuentra registrado');
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
            password: "",
        },
        validationSchema: lSchema,
        onSubmit,
    });

    //console.log(errors);

    return (
        <>
        <Header />
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
        </>
    );
};

export default Login;
