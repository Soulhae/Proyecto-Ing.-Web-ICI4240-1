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
                    <div
                        className={`${styles.body} card-body`}
                        style={{ position: "relative" }}
                    >
                        <div className="d-flex mb-2">
                            <div className="flex-grow-1">
                                <h5 className="card-title">
                                    {proyecto.titulo}
                                </h5>
                            </div>
                        </div>

                        <div
                            className=""
                            style={{
                                position: "absolute",
                                bottom: 0,
                                width: "100%",
                            }}
                        >
                            <h6 className="card-subtitle mb-2">
                                {/* {proyecto.categoria} */}
                                {proyecto.username}
                            </h6>
                            <div className="row d-flex">
                                <p className="col-6">{proyecto.categoria}</p>
                                <p className="col-6">{proyecto.subcategoria}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default VistaProyecto;
