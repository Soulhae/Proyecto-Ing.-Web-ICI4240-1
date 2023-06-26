import { Link } from "react-router-dom";
import { React, useEffect, useState } from "react";

import styles from "../styles/modules/VistaProyecto.module.scss";

const VistaProyecto = (props) => {
    const id = props.id;
    // console.log(id);

    const [proyecto, setProyecto] = useState([]);

    const data = {
        id: id,
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("http://localhost:3000/detalle_vista", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const jsonResult = await result.json();

            setProyecto(jsonResult[0]);
        };

        fetchData();
        // console.log(proyecto);
    }, []);

    return (
        <>
            <Link to={`../detalle/${id}`} style={{ textDecoration: "none" }}>
                <div
                    className={`${styles.caja2} card shadow-sm`}
                    style={{ minHeight: "386px" }}
                >
                    <div className="bd-placeholder-img card-img-top">
                        <img
                            src={proyecto.portada}
                            className="card-img-top"
                            width="100%"
                            height="250"
                            alt={proyecto.titulo}
                        />
                    </div>
                    <div className={`${styles.body} card-body`}>
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                                <h5 className="card-title">
                                    {proyecto.titulo}
                                </h5>
                            </div>
                        </div>
                        <div
                            className="my-2"
                            style={{ position: "absolute", bottom: 0 }}
                        >
                            <h6 className="card-subtitle mb-2">
                                {proyecto.categoria}
                            </h6>
                            <p className="mb-0">{proyecto.subcategoria}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default VistaProyecto;
