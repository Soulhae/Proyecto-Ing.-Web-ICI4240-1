import Carousel from "react-bootstrap/Carousel";

// import proyectos from "../proyectos/images.json";
import { useEffect, useState } from "react";

import styles from "../styles/modules/Inicio.module.scss";

function Inicio() {
    const [proyectos, setProyectos] = useState([
        {
            portada: "",
            titulo: "kchika",
            categoria: "jefe",
        },
        {
            portada: "",
            titulo: "kchika",
            categoria: "jefe",
        },
        {
            portada: "",
            titulo: "kchika",
            categoria: "jefe",
        },
    ]);

    useEffect(() => {
        const fetchProyectos = async () => {
            const result = await fetch("http://localhost:3000/proyectos");
            const jsonResult = await result.json();

            setProyectos(jsonResult);
        };

        fetchProyectos();
    }, []);

    return (
        <main className={`${styles.inicio} `}>
            <section className={styles.grupo1}>
                <div className={`${styles.izquierda} col-md-5`}>
                    <h2 className={styles.mensaje}>
                        Empieza tu proyectos o ayuda a otros
                    </h2>
                </div>
                <div className={`${styles.derecha} col-md-7`}>
                    <Carousel className="d-block w-100 m-auto">
                        <Carousel.Item className={styles.carouselSlide}>
                            <img
                                src={proyectos[0].portada}
                                alt={proyectos[0].titulo}
                            />
                            <Carousel.Caption>
                                <h3>{proyectos[0].titulo}</h3>
                                <p>{proyectos[0].categoria}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className={styles.carouselSlide}>
                            <img
                                src={proyectos[1].portada}
                                alt={proyectos[1].titulo}
                            />
                            <Carousel.Caption>
                                <h3>{proyectos[1].titulo}</h3>
                                <p>{proyectos[1].categoria}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className={styles.carouselSlide}>
                            <img
                                src={proyectos[2].portada}
                                alt={proyectos[2].titulo}
                            />
                            <Carousel.Caption>
                                <h3>{proyectos[2].titulo}</h3>
                                <p>{proyectos[2].categoria}</p>
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
                    Fundraising para proyectoss en los que estés interesad@ y
                    quieras apoyar monetariamente!
                </p>
            </div>
        </main>
    );
}

export default Inicio;
