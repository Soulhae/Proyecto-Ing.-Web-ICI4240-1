import styles from "../styles/modules/NuevoPForm.module.scss";
import { useFormik } from "formik";
import { pSchema } from "../schemas/indexP";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form, Row, Col } from "react-bootstrap";

const NuevoPForm = () => {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    console.log(values);
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
        <form id="formularioP" onSubmit={handleSubmit} autoComplete="off">
          <h1>Crea tu proyecto</h1>

          <Form.Group>
            <Form.Label
              htmlFor="username"
              style={{
                fontsize: "2rem",
                fontweight: "bold",
                display: "block",
                textalign: "left",
                margin: "1rem 0 0.2rem",
              }}
            >
              Nombre del proyecto
            </Form.Label>
            <Form.Control
              id="name"
              type="string"
              placeholder="Ingrese el nombre del proyecto"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.name && touched.name ? `${styles.inputerror}` : ""
              }
            ></Form.Control>
            </Form.Group>

            {errors.name && touched.name && (
              <p className={`${styles.errorMsg}`}>{errors.name}</p>
            )}

            <Form.Group type="text" className="mb-3">
              <Form.Label
                htmlFor="username"
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
              <Form.Control type="text" placeholder="Ingrese el link de la imagen para la portada" />
              </Form.Group>
            
              <Row>
                <Col>
              <Form.Group>
            <Form.Label
              htmlFor="username"
              style={{
                fontsize: "2rem",
                fontweight: "bold",
                display: "block",
                textalign: "left",
                margin: "0.5rem 0 0.2rem",
              }}
            >
              Categoria
            </Form.Label>
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
                -Seleccione una categoria-
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
          </Col>

          <Col>
          <Form.Group>
            <Form.Label
              htmlFor="username"
              style={{
                fontsize: "2rem",
                fontweight: "bold",
                display: "block",
                textalign: "left",
                margin: "0.5rem 0 0.2rem",
              }}
            >
              Subcategoria
            </Form.Label>
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
                -Seleccione una subcategoria-
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
          </Col>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

           

            <Form.Group>
            <Form.Label>Fecha</Form.Label> 
            <Form.Control type="text" placeholder="Indique cuando planea terminar el proyecto" />
            </Form.Group>

            <Form.Group>
            <Form.Label>Monto</Form.Label> 
            <Form.Control type="text" placeholder="Indique monto del proyecto" />
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
