import { Routes, Route } from "react-router-dom";

import "./styles/main.scss";

import Base from "./layout/Base.jsx";
import Inicio from "./pages/Inicio.jsx";
import ProyectoRealidad from "./pages/ProyectoRealidad.jsx";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Base />}>
                    <Route index element={<Inicio />} />
                    <Route
                        path="/proyecto_realidad"
                        element={<ProyectoRealidad />}
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
