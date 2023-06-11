import React from "react";
import { useParams } from "react-router";
import data from "../data/proyectos.json";

function Test() {
    const params = useParams();

    const proyecto = data[params.id];
    if (!proyecto) {
        return <h1>aweonao</h1>;
    }
    console.log(proyecto);

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
