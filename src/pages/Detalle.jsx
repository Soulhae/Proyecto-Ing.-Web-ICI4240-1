import { useParams } from "react-router";
import { React, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import gif from "../data/gif1.gif";

import styles from "../styles/modules/Detalle.module.scss";

import { Carousel, Container, Row, Col, Button, Form } from "react-bootstrap";

function VistaDetalle() {
    const params = useParams();
    // console.log(params);
    const location = useLocation();
    const handleVolver = () => {
        window.history.back();
    };

    const [aporte, setAporte] = useState("");

    const inputHandler = (e) => {
        var input = parseInt(e.target.value, 10);
        // console.log(input);

        if (input >= 0) {
            setAporte(input);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            patrocinar();
        }
    };

    const patrocinar = () => {
        if (aporte != "") {
            fetch("http://localhost:3000/patrocinio", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    monto: aporte,
                    idUsuario: 11,
                    idProyecto: proyecto[0].id,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    // Aquí puedes realizar acciones adicionales después de que se complete el patrocinio
                    console.log(data);
                })
                .catch((error) => {
                    // Manejar cualquier error de la solicitud
                    console.error(error);
                });
        }
    };

    const [proyecto, setProyecto] = useState([]);

    useEffect(() => {
        const fetchProyecto = async () => {
            const result = await fetch(
                "http://localhost:3000/detalle_proyecto",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(params),
                }
            );
            const jsonResult = await result.json();
            // console.log(jsonResult);

            setProyecto(jsonResult);
        };

        fetchProyecto();
        // console.log(proyecto);
    }, []);

    if (proyecto.length === 0) {
        return (
            <Container
                className={`${styles.main} d-flex flex-column `}
                style={{ height: "88vh", maxWidth: "600px" }}
            >
                <Row className="my-4">
                    <Col className="col-10 ">
                        <h1>No encontrado</h1>
                    </Col>
                    <Col className="col-2 d-flex justify-content-end">
                        {location.state && location.state.from && (
                            <Link to={location.state.from}>
                                <Button
                                    className={styles.boton}
                                    variant="secondary"
                                >
                                    Volver
                                </Button>
                            </Link>
                        )}
                        {!location.state && (
                            <Button
                                className={styles.boton}
                                variant="secondary"
                                onClick={handleVolver}
                            >
                                Volver
                            </Button>
                        )}
                    </Col>
                </Row>
                <Row>
                    <img
                        src={gif}
                        alt=""
                        style={{ width: "700px", margin: "auto" }}
                    />
                </Row>
            </Container>
        );
    }

    return (
        <Container className={`${styles.main} my-4`}>
            <Row className="my-1">
                <Col className="col-10">
                    <h1>{proyecto[0].titulo}</h1>
                </Col>
                <Col className="col-2 d-flex justify-content-end">
                    {location.state && location.state.from && (
                        <Link to={location.state.from}>
                            <Button
                                className={styles.boton}
                                variant="secondary"
                            >
                                Volver
                            </Button>
                        </Link>
                    )}
                    {!location.state && (
                        <Button
                            className={styles.boton}
                            variant="secondary"
                            onClick={handleVolver}
                        >
                            Volver
                        </Button>
                    )}
                </Col>
            </Row>
            <Row className="my-1">
                <h5>Autor: {proyecto[0].username}</h5>
            </Row>
            <Row className="my-1">
                <h6>Fecha de lanzamiento: {proyecto[0].fecha_lanzamiento}</h6>
            </Row>
            <Row className="my-1">
                <h6>Categoria: {proyecto[0].categoria}</h6>
            </Row>
            <Row className="my-1">
                <h6>Tipo: {proyecto[0].subcategoria}</h6>
            </Row>
            <Row className={`${styles.caja} my-1 `}>
                <Col className="col-md-8 ">
                    <Carousel className="d-block w-100">
                        {proyecto.map((value, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    src={value.imagen}
                                    alt=""
                                    style={{ width: "100%", height: "50vh" }}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col className={`${styles.caja2} col-md-4 `}>
                    <Row className="d-flex justify-content-center">
                        <Row className="mb-2">
                            <p
                                style={{
                                    textAlign: "justify",
                                    textJustify: "inter-word",
                                }}
                            >
                                {proyecto[0].descripcion}
                            </p>
                        </Row>
                        <Row className="flex-column mb-2">
                            <Col>
                                <h2>${proyecto[0].monto} </h2>
                            </Col>
                            <Col>
                                <h6>recaudado de ${proyecto[0].objetivo}</h6>
                            </Col>
                        </Row>

                        <Row>
                            <p>gracias a patrocinadores!</p>
                        </Row>

                        <Row className={`my-2 `}>
                            {/* <Button
                                // variant="success"
                                className="w-100"
                                style={{
                                    maxHeight: "60px",
                                    minHeight: "50px",
                                    minWidth: "100px",

                                    backgroundColor: "darkslateblue",
                                    border: "none",
                                    borderRadius: "0",
                                }}
                            >
                                Conviertete en patrocinador!
                            </Button> */}
                            <Form className="d-flex">
                                <Form.Control
                                    type="number"
                                    placeholder="Ingresa el monto a aportar"
                                    className={`me-2 ${styles.formNumber}`}
                                    aria-label="Patrocinar"
                                    onChange={inputHandler}
                                    onKeyDown={handleKeyPress}
                                />
                                <Button
                                    //variant="outline-success"
                                    style={{
                                        maxHeight: "60px",
                                        minHeight: "50px",
                                        minWidth: "120px",

                                        backgroundColor: "darkslateblue",
                                        border: "none",
                                        // borderRadius: "0",
                                    }}
                                    onClick={patrocinar}
                                >
                                    Patrocinar
                                </Button>
                            </Form>
                        </Row>
                    </Row>
                </Col>
                <Row className="my-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus est quo inventore porro reprehenderit in,
                        veritatis suscipit adipisci fuga, fugit, corporis
                        necessitatibus commodi. Non quaerat molestias quam porro
                        voluptas atque ipsa voluptates eveniet. Provident et
                        nemo, animi quo possimus ab minima. Iusto assumenda
                        animi ipsam minima, placeat quos eius adipisci ea ipsa
                        sequi facilis quam, architecto alias tempora sit
                        temporibus, totam consequatur vero recusandae. Placeat,
                        inventore libero? Illum ea optio illo iste! Totam
                        quibusdam atque praesentium aspernatur reprehenderit
                        iusto ratione expedita ipsam? Recusandae in reiciendis
                        nisi eaque modi autem doloremque tenetur, sit, illum
                        aliquam veniam, consequatur sequi voluptate repudiandae
                        maiores.
                    </p>
                </Row>
            </Row>
        </Container>
    );
}

export default VistaDetalle;
