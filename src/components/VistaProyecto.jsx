import React from "react";

import styles from "../styles/modules/Proyecto.module.scss";

const VistaProyecto = ({ proyecto }) => {
    const { id, imagenes, titulo, tipo, autor } = proyecto;

    return (
        <div className="card shadow-sm">
            <div className="bd-placeholder-img card-img-top">
                <img
                    src={imagenes[0]}
                    className="card-img-top"
                    width="100%"
                    height="250"
                    alt={titulo}
                />
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    <div className="d-flex">
                        <div className="flex-grow-1">{titulo}</div>
                    </div>
                </h5>
                <h6 className="card-subtitle mb-3 text-muted">{tipo}</h6>
                <div>
                    <p>{autor}</p>
                </div>
            </div>
        </div>
    );
};

export default VistaProyecto;
