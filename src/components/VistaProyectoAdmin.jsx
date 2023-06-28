import { Link } from "react-router-dom";
import { React, useEffect, useState } from "react";

import { AppContext } from "../components/AppContext.jsx"
import { useContext } from "react";

import styles from "../styles/modules/VistaProyecto.module.scss";
import axios from "axios";

const VistaProyectoAdmin = (props) => {
    const id = props.id;
    // console.log(id);

    const { userInfo } = useContext(AppContext);

    const eliminarProyecto = () => {
        axios
            .delete(`http://localhost:3000/eliminarProyecto/${proyecto.id}`)
            .then((response) =>{
                console.log('se realizó correctamente');
                alert('El proyecto se eliminó correctamente');
            })
            .catch((error)=>{
                console.error(error);
            })
    }

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
            {userInfo.role == 1 ? (
                <>
                    <button onClick={eliminarProyecto}>Eliminar</button>
                </>
            ) : userInfo.role == 2 ? (
                <>
                    <p>Que intentas eh??</p>
                </>
            ) : (
                <>
                    <p>Que intentas eh??</p>
                </>
            )}
        </>
    );
};

export default VistaProyectoAdmin;
