import { useEffect, useState } from "react";

import Vista from "../components/VistaProyecto";
import data from "../data/proyectos.json";

import styles from "../styles/modules/Proyectos.module.scss";

function Proyectos() {
    return (
        <div>
            <main className={`${styles.main} p-5`}>
                <h1 className="d-flex justify-content-center">Proyectos</h1>
                <hr className={styles.salto} />
                <div className={`${styles.caja} album py-5 bg-light`}>
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 ">
                            {data.map((proyecto) => (
                                <div className="col" key={proyecto.id}>
                                    <Vista proyecto={proyecto} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Proyectos;
