import { Container, Table, Row } from "react-bootstrap";
import styles from "../styles/modules/Busqueda.module.scss";

import { useParams } from "react-router";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Busqueda() {
    const params = useParams();
    // console.log(params);

    const [buscados, setBuscados] = useState([]);

    useEffect(() => {
        const fetchBusqueda = async () => {
            const result = await fetch("http://localhost:3000/busqueda", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(params),
            });
            const jsonResult = await result.json();
            console.log(jsonResult);

            setBuscados(jsonResult);
        };

        fetchBusqueda();
        // console.log(buscados);
    }, []);

    // if (buscados.length === 0) {
    //     return (
    //         <Container
    //             className={`${styles.main} d-flex flex-column `}
    //             style={{ height: "88vh" }}
    //         >
    //             <Row className="m-auto my-4">
    //                 <h1 className="m-auto">No encontrado</h1>
    //             </Row>
    //             <Row>
    //                 <img
    //                     src={gif}
    //                     alt=""
    //                     style={{ width: "700px", margin: "auto" }}
    //                 />
    //             </Row>
    //         </Container>
    //     );
    // }
    return (
        <Container className="p-4 py-4">
            <h1 className={`p-2 md:p-4 ${styles.titulo2}`}>
                Resultados para: {params.buscado}
            </h1>
            <Table responsive="md" className={styles.tabla}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Título</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Subategoría</th>
                        <th scope="col">Monto recaudado</th>
                    </tr>
                </thead>
                {buscados.map((proyecto, index) => (
                    <tbody key={proyecto.id}>
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td style={{ width: "400px", minWidth: "150px" }}>
                                <Link
                                    to={`../detalle/${proyecto.id}`}
                                    className={styles.titulo}
                                >
                                    {proyecto.titulo}
                                </Link>
                            </td>
                            <td className={styles.otro}>
                                {proyecto.categoria}
                            </td>
                            <td className={styles.otro}>
                                {proyecto.subcategoria}
                            </td>
                            <td className={styles.otro}>$ {proyecto.monto}</td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </Container>
    );
}

export default Busqueda;
