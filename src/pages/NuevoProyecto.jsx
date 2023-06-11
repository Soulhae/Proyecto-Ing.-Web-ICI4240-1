import { useState } from "react";

function NuevoProyecto() {
    const [titulo, setTitulo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(titulo);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="titulo"
                onChange={(e) => setTitulo(e.target.value)}
            />
            <button>Guardar</button>
        </form>
    );
}

export default NuevoProyecto;
