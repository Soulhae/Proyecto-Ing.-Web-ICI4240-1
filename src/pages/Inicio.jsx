import Carousel from "react-bootstrap/Carousel";

import data from "../data/images.json";

import styles from "../styles/modules/Inicio.module.scss";

function Inicio() {
    return (
        <main className={`${styles.inicio} `}>
            <section className={styles.grupo1}>
                <div className={`${styles.izquierda} col-md-5`}>
                    <h2 className={styles.mensaje}>
                        Empieza tu proyecto o ayuda a otros
                    </h2>
                </div>
                <div className={`${styles.derecha} col-md-7`}>
                    <Carousel className="d-block w-100 m-auto">
                        <Carousel.Item className={styles.carouselSlide}>
                            <img src={data[0].src} alt={data[0].alt} />
                            <Carousel.Caption>
                                <h3>{data[0].caption}</h3>
                                <p>{data[0].alt}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className={styles.carouselSlide}>
                            <img src={data[1].src} alt={data[1].alt} />

                            <Carousel.Caption>
                                <h3>{data[1].caption}</h3>
                                <p>{data[1].alt}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className={styles.carouselSlide}>
                            <img src={data[2].src} alt={data[2].alt} />

                            <Carousel.Caption>
                                <h3>{data[2].caption}</h3>
                                <p>{data[2].alt}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ marginTop: "10vh" }}
            >
                <p className={`${styles.texto} align-self-flex-end`}>
                    Fundraising para proyectos en los que estés interesad@ y
                    quieras apoyar monetariamente!
                </p>
            </div>
        </main>
    );
}

export default Inicio;
