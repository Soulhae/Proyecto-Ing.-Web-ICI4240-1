import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/modules/VistaProyecto.module.scss";

const VistaProyecto = ({ proyecto }) => {
    const { id, portada, imagenes, titulo, tipo, autor, lanzamiento } =
        proyecto;

    return (
        <>
            <Link to={`../detalle/${id}`} style={{ textDecoration: "none" }}>
                <div
                    className={`${styles.caja2} card shadow-sm`}
                    style={{ minHeight: "386px" }}
                >
                    <div className="bd-placeholder-img card-img-top">
                        <img
                            src={portada}
                            className="card-img-top"
                            width="100%"
                            height="250"
                            alt={titulo}
                        />
                    </div>
                    <div className={`${styles.body} card-body`}>
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                                <h5 className="card-title">{titulo}</h5>
                            </div>
                        </div>
                        <div
                            className="my-2"
                            style={{ position: "absolute", bottom: 0 }}
                        >
                            <h6 className="card-subtitle mb-2">{tipo}</h6>
                            <p className="mb-0">{autor}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
        // <div className="card shadow-sm" style={{ minHeight: "390px" }}>
        //     <div className="bd-placeholder-img card-img-top">
        //         <img
        //             src={portada}
        //             className="card-img-top"
        //             width="100%"
        //             height="250"
        //             alt={titulo}
        //         />
        //     </div>
        //     <div className="card-body">
        //         <h5 className="card-title">
        //             <div className="d-flex">
        //                 <div className="flex-grow-1">
        //                     <Link
        //                         className={styles.titulo}
        //                         to={`../detalle/${id}`}
        //                     >
        //                         {titulo}
        //                     </Link>
        //                 </div>
        //             </div>
        //         </h5>
        //         <h6 className="card-subtitle mb-2 text-muted">{tipo}</h6>
        //         <p className="mb-0">{autor}</p>
        //     </div>
        // </div>
    );
};

export default VistaProyecto;
