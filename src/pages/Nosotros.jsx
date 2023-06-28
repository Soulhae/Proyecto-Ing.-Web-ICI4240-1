import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/modules/Nosotros.module.scss";
import Header from "../components/Header.jsx";

function Nosotros() {
    return (
        <>
        <Header />
        <Container>
            <h1 className={`p-4 ${styles.titulo2}`}>¿Quiénes Somos?</h1>
            <Row className="m-1 my-4">
                <Col>
                    <Row>
                        <h3 className={`${styles.ola}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse iaculis gravida felis, ut congue
                            nulla consectetur volutpat.
                        </h3>
                    </Row>
                    <Row>
                        <img
                            src="https://entresabanasyalmohadas.files.wordpress.com/2014/09/haik.jpg?w=640"
                            alt="Haikyuu Poster"
                            className={`${styles.fotitos}`}
                        />
                    </Row>
                </Col>
                <Col className="m-auto">
                    <img
                        src="https://i.ytimg.com/vi/JQr1BimGwSY/maxresdefault.jpg"
                        alt="Lineage II Poster"
                        className={`${styles.fotitos}`}
                    />
                </Col>
            </Row>
            <Row className="m-1">
                <Col className="m-auto">
                    <img
                        src="https://cdn.7tv.app/emote/64114d39f99ff93d22604f3f/4x.webp"
                        alt="SOYSCREAM"
                        className={`${styles.fotitos}`}
                    />
                </Col>
                <Col className="m-auto">
                    <h2 className={`${styles.ola2}`}>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </h2>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Nosotros;
