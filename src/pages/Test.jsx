import React from "react";
import { useParams } from "react-router";

function Test() {
    const params = useParams();

    return (
        <>
            <h1>Detalle</h1>
            <p>{params.id}</p>
        </>
    );
}
export default Test;
