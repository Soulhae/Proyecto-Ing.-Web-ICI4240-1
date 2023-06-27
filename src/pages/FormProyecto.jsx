import { Button, Col, Row, Form, Container } from "react-bootstrap";
// import InputGroup from "react-bootstrap/InputGroup";
import * as formik from "formik";
import * as yup from "yup";

function FormProyecto() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        id_usuario: yup.string().required(),
        portada: yup.string().required(),
        titulo: yup.string().required(),
        categoria: yup.string().required(),
        subcategoria: yup.string().required(),
        fecha_lanzamiento: yup.string().required(),
        descripcion: yup.string().required(),
        objetivo: yup.string().required(),
    });

    return (
        <Container>
            <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                    id_usuario: "11",
                    portada: "",
                    titulo: "",
                    categoria: "",
                    subcategoria: "",
                    fecha_lanzamiento: "",
                    descripcion: "",
                    objetivo: "",
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row>Titulo</Row>
                        <Row>Portada link</Row>
                        <Row>
                            <Col>categoria</Col>
                            <Col>subcategoria</Col>
                        </Row>
                        <Row>Descripcion</Row>
                        <Row>arreglo imagenes links</Row>
                        <Row>fecha</Row>
                        <Row>Objetivo monto</Row>

                        <Button type="submit">Submit form</Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}

export default FormProyecto;
