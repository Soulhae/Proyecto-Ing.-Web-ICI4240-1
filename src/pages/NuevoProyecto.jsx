import { useState } from "react";
import styles from "../styles/modules/NuevoProyecto.module.scss";
import { Container, Button, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";

function NuevoProyecto() {
    return (
        <>
        <Header />
        <Container>
            <Container className="p-4 py-5">
                <h1 className={`${styles.titulo2} mx-3`}>Inicia tu proyecto</h1>
                <Row className={`${styles.caja} m-auto`}>
                    <Col className="m-auto">
                        <Row>
                            <img
                                src="https://media.istockphoto.com/id/1212742343/es/foto/grupo-de-trabajadores-de-negocios-de-pie-golpeando-los-pu%C3%B1os-en-la-oficina.jpg?s=612x612&w=0&k=20&c=Ja2V74xBZXJgXJnEK3hsF1BA3CZdBEwJXGdRKEnAUk8="
                                alt="Puños"
                                className={`${styles.fotitos} m-auto`}
                            />
                        </Row>
                    </Col>
                    <Col className="m-auto">
                        <Row>
                            <h3
                                className={`${styles.ola}`}
                                style={{
                                    textAlign: "justify",
                                    textJustify: "inter-word",
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quae distinctio rerum
                                laudantium nam! Culpa perspiciatis eum maiores,
                                soluta ea ad natus necessitatibus recusandae
                                libero sit repudiandae voluptatibus alias nam,
                                fugiat officia ullam impedit magni! Illo
                                quisquam nam aperiam, quas possimus soluta iure
                                alias quidem quia distinctio deserunt voluptas!
                            </h3>
                            <Link to="/nuevopform">
                                <Button
                                    className={`${styles.boton1} m-auto my-3`}
                                    active
                                    type="submit"
                                >
                                    Comencemos!
                                </Button>
                            </Link>
                        </Row>
                    </Col>
                </Row>
                <Row className="m-1">
                    <Col className="m-auto"></Col>
                </Row>
            </Container>
        </Container>
        </>
    );
}

export default NuevoProyecto;
