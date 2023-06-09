import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import data from "../data/images.json";

function Inicio() {
    return (
        <Container>
            <Stack direction="horizontal" gap={4}>
                <div>
                    <h1
                        style={{
                            color: "#afafaf",
                            fontFamily: "Outfit",
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: "50px",
                            opacity: 0.85,
                        }}
                    >
                        Empieza tu proyecto o ayuda a otros
                    </h1>
                </div>
                <div>
                    <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={data[0].src}
                        alt={data[0].alt}
                        style={{
                            height: "480px",
                            width: "auto",
                            maxHeight: "480px",
                        }}
                        />
                        <Carousel.Caption>
                        <h3>{data[0].caption}</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={data[1].src}
                        alt={data[1].alt}
                        style={{
                            height: "480px",
                            width: "auto",
                            maxHeight: "480px",
                        }}
                        />

                        <Carousel.Caption>
                        <h3>{data[1].caption}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={data[2].src}
                        alt={data[2].alt}
                        style={{
                            height: "480px",
                            width: "auto",
                            maxHeight: "480px",
                        }}
                        />

                        <Carousel.Caption>
                        <h3>{data[2].caption}</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </div>
            </Stack>
            <Row>
                <p
                    style={{
                        color: "#363636",
                        fontFamily: "Outfit",
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "calc(0.2rem + 1.5vw)",
                    }}
                >
                    Fundraising para proyectos en los que estés interesad@ y
                    quieras apoyar monetariamente!
                </p>
            </Row>
        </Container>
    );
}

export default Inicio;
