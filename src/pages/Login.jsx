import styles from "../styles/modules/Login.module.scss"
import { useFormik } from "formik";
import { lSchema } from "../schemas/indexL";
import { Container } from "react-bootstrap";

const onSubmit = async (values ,actions) => { 

  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve,1000));
  actions.resetForm();
};


const Login = () => {
  const { values, errors, touched, isSubmitting,handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
   email:"",
   password:"",
   
    },
    validationSchema: lSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <Container>
      <div className={`m-auto my-5 ${styles.boxL}`}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <label
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
          </label>
          <input
            id="email"
            type="email"
            placeholder="Ingrese su email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email? `${styles.inputerror}` : ""}
          ></input>{errors.email && touched.email && <p className={`${styles.errorMsg}`}>{errors.email}</p>}
          <label
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
          </label>
          <input
            id="password"
            type="password"
            placeholder="Ingrese una contraseña"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password? `${styles.inputerror}` : ""}
          ></input>{errors.password && touched.password && <p className={`${styles.errorMsg}`}>{errors.password}</p>}
          <button disabled={isSubmitting} type="submit">Iniciar sesion</button>
        </form>
      </div>
    </Container>
  );
};


export default Login;
