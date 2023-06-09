import { Routes, Route } from "react-router-dom";

import "./styles/main.scss";

//Componentes
import Base from "./layout/Base.jsx";
import Inicio from "./pages/Inicio.jsx";
import ProyectoRealidad from "./pages/ProyectoRealidad.jsx";
import Proyectos from "./pages/Proyectos";
import FAQ from "./pages/FAQ";
import Nosotros from "./pages/Nosotros";
import NuevoProyecto from "./pages/NuevoProyecto";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
                    <Route path="/proyectos" element={<Proyectos />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/nuevo_proyecto" element={<NuevoProyecto />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
