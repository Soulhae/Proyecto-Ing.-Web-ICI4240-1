<<<<<<< HEAD
import { useFormik } from "formik";
import { basicSchema } from "../Schemas/Index";
const onSubmit = () => {

  console.log("Form submitted");

};


const Register = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
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
          classname={errors.email ? "input-error" : ""}

        ></input>
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
        ></input>
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
        ></input>
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
        ></input>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};
=======
import { Button } from "react-bootstrap";

function Register() {
    return (
        <div>
            <Button>Iniciar sesión</Button>
        </div>
    );
}
>>>>>>> 4ed7940153ec814765e8b34bcbe16a67a0b192ed

export default Register;
