import styles from "../styles/modules/Register.module.scss"
import { useFormik } from "formik";
import { basicSchema } from "../schemas/indexL";

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
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <div>
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
        ></input>
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
        ></input>
        <button disabled={isSubmitting} type="submit">Iniciar sesion</button>
      </form>
    </div>
  );
};


export default Login;
