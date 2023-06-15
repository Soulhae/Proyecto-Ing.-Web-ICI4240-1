import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import data from "../data/proyectos.json";
import gif from "../data/gif1.gif";

import styles from "../styles/modules/Detalle.module.scss";

import { Carousel, Container, Row, Col, Button } from "react-bootstrap";

//BOTONN DE VOLVER FALTA
//FALTA ESTILO RESPONSIVO

function VistaDetalle() {
    const params = useParams();

    const proyecto = data[params.id];

    if (!proyecto) {
        return (
            <Container
                className={`${styles.main} d-flex flex-column `}
                style={{ height: "88vh" }}
            >
                <Row className="m-auto my-4">
                    <h1 className="m-auto">No encontrado</h1>
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
        <>
            <Detalle proyecto={proyecto} />
        </>
    );
}

function Detalle({ proyecto }) {
    return (
        <Container className={`${styles.main} my-4`}>
            <Row className="my-1">
                <Col className="col-10">
                    <h1>{proyecto.titulo}</h1>
                </Col>
                <Col className="col-2 d-flex justify-content-end">
                    <Link to="/proyectos">
                        <Button className={styles.boton} variant="secondary">
                            Volver
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row className="my-1">
                <h5>Autor: {proyecto.autor}</h5>
            </Row>
            <Row className="my-1">
                <h6>Fecha de lanzamiento: {proyecto.lanzamiento}</h6>
            </Row>
            <Row className="my-1">
                <h6>Tipo: {proyecto.tipo}</h6>
            </Row>
            <Row className={`${styles.caja} my-1 `}>
                <Col className="col-md-8 ">
                    <Carousel className="d-block w-100">
                        {proyecto.imagenes.map((imagen, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    src={`${imagen}`}
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
                                {proyecto.descripcion}
                            </p>
                        </Row>
                        <Row className="flex-column mb-2">
                            <Col>
                                <h2>${proyecto.monto} </h2>
                            </Col>
                            <Col>
                                <h6>recaudado de ${proyecto.objetivo}</h6>
                            </Col>
                        </Row>

                        <Row>
                            <p>
                                gracias a {proyecto.patrocinadores}{" "}
                                patrocinadores!
                            </p>
                        </Row>

                        <Row className="d-flex justify-content-center my-2">
                            <Button
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
                            </Button>
                        </Row>
                    </Row>
                </Col>
                <Row className="my-4" style={{ height: "400px" }}>
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
