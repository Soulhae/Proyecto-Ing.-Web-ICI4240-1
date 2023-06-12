import React from "react";
import { Link } from "react-router-dom";

const VistaProyecto = ({ proyecto }) => {
    const { id, portada, imagenes, titulo, tipo, autor, lanzamiento } =
        proyecto;

    return (
        <div className="card shadow-sm" style={{ minHeight: "390px" }}>
            <div className="bd-placeholder-img card-img-top">
                <img
                    src={portada}
                    className="card-img-top"
                    width="100%"
                    height="250"
                    alt={titulo}
                />
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    <div className="d-flex">
                        <div className="flex-grow-1">
                            <Link to={`../detalle/${id}`}>{titulo}</Link>
                        </div>
                    </div>
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">{tipo}</h6>
                <p className="mb-0">{autor}</p>
            </div>
        </div>
    );
};

export default VistaProyecto;
