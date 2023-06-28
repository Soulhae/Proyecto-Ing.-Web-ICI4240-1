import { Container, Table } from "react-bootstrap";
import styles from "../styles/modules/Busqueda.module.scss";

import { useParams } from "react-router";
import { React, useEffect, useState } from "react";

function Busqueda() {
    const params = useParams();
    // console.log(params);
    // const buscado = params.buscado;
    // console.log(buscado);

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

    if (buscados.length === 0) {
        return <div>error en la busqueda</div>;
    }
    return (
        <Container className="p-4 py-5">
            <h1 className={`p-4 ${styles.titulo2}`}>
                Resultados de la busqueda
            </h1>
            <Table>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        {/* <th scope="col">{buscado}</th> */}
                        <th scope="col">Categoría</th>
                        <th scope="col">Monto recaudado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>
                            <a href="/">Proyecto de Ejemplo 1</a>
                        </td>
                        <td>Juegos</td>
                        <td>$ 9999</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default Busqueda;
