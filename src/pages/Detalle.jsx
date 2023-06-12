import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import data from "../data/proyectos.json";
import gif from "../data/gif1.gif";

import { Carousel, Container, Row, Col, Button } from "react-bootstrap";

//BOTONN DE VOLVER FALTA
//FALTA ESTILO RESPONSIVO

function Test() {
    const params = useParams();

    const proyecto = data[params.id];

    if (!proyecto) {
        return (
            <div className="d-flex flex-column justify-content-center">
                <h1 className="m-auto">No encontrado</h1>
                <img
                    src={gif}
                    alt=""
                    style={{ width: "700px", margin: "auto" }}
                />
            </div>
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
        <Container className="my-4">
            <Row className="my-1">
                <Col className="col-10">
                    <h1>{proyecto.titulo}</h1>
                </Col>
                <Col className="col-2 d-flex justify-content-end">
                    <Link to="/proyectos">Volver</Link>
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
            <Row className="my-1">
                <Carousel className="d-block w-100">
                    {proyecto.imagenes.map((imagen, index) => (
                        <Carousel.Item key={index}>
                            <img
                                src={`${imagen}`}
                                alt=""
                                style={{ width: "100%", height: "70vh" }}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Row>
            <Row className="my-3">
                <Col lg={10} className="col-8 col">
                    <p
                        style={{
                            textAlign: "justify",
                            textJustify: "inter-word",
                        }}
                    >
                        {proyecto.descripcion}
                    </p>
                </Col>
                <Col lg={2} className="col-4 d-flex justify-content-center">
                    <Button
                        // variant="success"
                        className="w-100"
                        style={{
                            maxHeight: "60px",
                            minWidth: "100px",
                            backgroundColor: "darkslateblue",
                            border: "none",
                        }}
                    >
                        Patrocinar
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Test;
