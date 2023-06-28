import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/modules/FAQ.module.scss";
import Header from "../components/Header";

function FAQ() {
    return (
        <>
        <Header />
        <Container className="p-4 py-2">
            <h1 className={`p-4 ${styles.titulo2}`}>Preguntas frecuentes</h1>
            <Row>
                <Col className="px-5 my-3 mb-5">
                    <Row>
                        <h2 className={`${styles.pregunta}`}>
                            ¿Curabitur consectetur lacus vel nunc condimentum
                            venenatis?
                        </h2>
                    </Row>
                    <Row className="py-3">
                        <h3 className={`${styles.respuesta}`}>
                            Orci varius natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Vivamus
                            venenatis semper ante ut lacinia.
                        </h3>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="px-5 my-3 mb-5">
                    <Row>
                        <h2 className={`${styles.pregunta}`}>
                            ¿Integer varius suscipit justo mollis convallis. Ut
                            in orci interdum, bibendum lacus et, tristique
                            augue?
                        </h2>
                    </Row>
                    <Row className="py-3">
                        <h3 className={`${styles.respuesta}`}>
                            Orci varius natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Vivamus
                            venenatis semper ante ut lacinia.
                        </h3>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="px-5 my-3 mb-5">
                    <Row>
                        <h2 className={`${styles.pregunta}`}>
                            ¿Proin eu magna dolor. Ut erat quam, facilisis eget
                            eros sed, finibus lobortis mi?
                        </h2>
                    </Row>
                    <Row className="py-3">
                        <h3 className={`${styles.respuesta}`}>
                            Aliquam ullamcorper, est in vestibulum auctor, velit
                            nibh interdum purus, eget iaculis nisl sem a ex.
                        </h3>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="px-5 my-3 mb-5">
                    <Row>
                        <h2 className={`${styles.pregunta}`}>
                            ¿Curabitur consectetur lacus vel nunc condimentum
                            venenatis?
                        </h2>
                    </Row>
                    <Row className="py-3">
                        <h3 className={`${styles.respuesta}`}>
                            Orci varius natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Vivamus
                            venenatis semper ante ut lacinia.
                        </h3>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="px-5 my-3 mb-5">
                    <Row>
                        <h2 className={`${styles.pregunta}`}>
                            ¿Integer varius suscipit justo mollis convallis. Ut
                            in orci interdum, bibendum lacus et, tristique
                            augue?
                        </h2>
                    </Row>
                    <Row className="py-3">
                        <h3 className={`${styles.respuesta}`}>
                            Orci varius natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Vivamus
                            venenatis semper ante ut lacinia.
                        </h3>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="px-5 my-3 mb-5">
                    <Row>
                        <h2 className={`${styles.pregunta}`}>
                            ¿Proin eu magna dolor. Ut erat quam, facilisis eget
                            eros sed, finibus lobortis mi?
                        </h2>
                    </Row>
                    <Row className="py-3">
                        <h3 className={`${styles.respuesta}`}>
                            Aliquam ullamcorper, est in vestibulum auctor, velit
                            nibh interdum purus, eget iaculis nisl sem a ex.
                        </h3>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="px-5 my-3 mb-5">
                    <Row>
                        <h2 className={`${styles.pregunta}`}>
                            ¿Curabitur consectetur lacus vel nunc condimentum
                            venenatis?
                        </h2>
                    </Row>
                    <Row className="py-3">
                        <h3 className={`${styles.respuesta}`}>
                            Orci varius natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Vivamus
                            venenatis semper ante ut lacinia.
                        </h3>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="px-5 my-3 mb-5">
                    <Row>
                        <h2 className={`${styles.pregunta}`}>
                            ¿Curabitur consectetur lacus vel nunc condimentum
                            venenatis?
                        </h2>
                    </Row>
                    <Row className="py-3">
                        <h3 className={`${styles.respuesta}`}>
                            Orci varius natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Vivamus
                            venenatis semper ante ut lacinia.
                        </h3>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="px-5 my-3 mb-5">
                    <Row>
                        <h2 className={`${styles.pregunta}`}>
                            ¿Integer varius suscipit justo mollis convallis. Ut
                            in orci interdum, bibendum lacus et, tristique
                            augue?
                        </h2>
                    </Row>
                    <Row className="py-3">
                        <h3 className={`${styles.respuesta}`}>
                            Orci varius natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Vivamus
                            venenatis semper ante ut lacinia.
                        </h3>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="px-5 my-3 mb-5">
                    <Row>
                        <h2 className={`${styles.pregunta}`}>
                            ¿Proin eu magna dolor. Ut erat quam, facilisis eget
                            eros sed, finibus lobortis mi?
                        </h2>
                    </Row>
                    <Row className="py-3">
                        <h3 className={`${styles.respuesta}`}>
                            Aliquam ullamcorper, est in vestibulum auctor, velit
                            nibh interdum purus, eget iaculis nisl sem a ex.
                        </h3>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default FAQ;
