import { useEffect, useState } from "react";

import Vista from "../components/VistaProyecto";
import data from "../data/proyectos.json";

import styles from "../styles/modules/Proyectos.module.scss";

import Container from "react-bootstrap/Container";

function Proyectos() {
    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("http://localhost:3000/proyectos");
            const jsonResult = await result.json();

            setProyectos(jsonResult);
        };

        fetchData();
    }, []);

    return (
        <Container>
            <main className={`${styles.main} py-4 px-3`}>
                <div className="">
                    <h1 className={`${styles.titulo}  mb-3`}>Proyectos</h1>
                </div>

                <div className="d-flex justify-content-center">
                    <div className={`${styles.caja} album py-4 bg-light `}>
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 ">
                                {proyectos.map((proyecto) => (
                                    <div className="col" key={proyecto.id}>
                                        <Vista id={proyecto.id} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Container>
    );
}

export default Proyectos;
