import React from "react";
import { useParams } from "react-router";
import data from "../data/proyectos.json";
import gif from "../data/gif1.gif";

//BOTONN DE VOLVER FALTA
//FALTA ESTILO RESPONSIVO

function Test() {
    const params = useParams();

    const proyecto = data[params.id];
    if (!proyecto) {
        return (
            <div className="d-flex flex-column justify-content-center">
                <h1 className="m-auto">No encontrado</h1>
                <img
                    src={gif}
                    alt=""
                    style={{ width: "700px", margin: "auto" }}
                />
            </div>
        );
    }

    return (
        <>
            <h1>{proyecto.titulo}</h1>
            <p>Autor: {proyecto.autor}</p>
            <p>Tipo: {proyecto.tipo}</p>
            <img src={`${proyecto.imagenes[0]}`} alt="" />
        </>
    );
}
export default Test;
