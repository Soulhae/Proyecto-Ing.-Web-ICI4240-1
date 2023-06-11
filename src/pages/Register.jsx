import styles from "../styles/modules/Register.module.scss"
import { useFormik } from "formik";
import { basicSchema } from "../schemas/index";
const onSubmit = async (values ,actions) => { 

  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve,1000));
  actions.resetForm();
};


const Register = () => {
  const { values, errors, touched, isSubmitting,handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
   email:"",
   username:"",
   password:"",
   confirmPassword:"",
   number:"",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <div className={`${styles.boxL}`}>
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
        </label>
        <input
          id="username"
          type="username"
          placeholder="Ingrese un usuario"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.username && touched.username? `${styles.inputerror}` : ""}
        ></input>
        {errors.username && touched.username && <p className={`${styles.errorMsg}`}>{errors.username}</p>}
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
        <label
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
        </label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Reingrese la contraseña"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.confirmPassword && touched.confirmPassword? `${styles.inputerror}` : ""}
        ></input>{errors.confirmPassword && touched.confirmPassword && <p className={`${styles.errorMsg}`}>{errors.confirmPassword}</p>}
        <label
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
        </label>
        <input
          id="number"
          type="number"
          placeholder="Ingrese su número telefonico"
          value={values.number}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.number && touched.number? `${styles.inputerror}` : ""}
        ></input>{errors.number && touched.number && <p className={`${styles.errorMsg}`}>{errors.number}</p>}
        <button disabled={isSubmitting} type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
