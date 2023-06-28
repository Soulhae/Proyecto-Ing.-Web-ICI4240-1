import { Routes, Route } from "react-router-dom";

import "./styles/main.scss";

//Componentes
import Base from "./layout/Base.jsx";
import Inicio from "./pages/Inicio.jsx";
import Proyectos from "./pages/Proyectos.jsx";
import FAQ from "./pages/FAQ.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import NuevoProyecto from "./pages/NuevoProyecto.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Busqueda from "./pages/Busqueda.jsx";
import Detalle from "./pages/Detalle.jsx";
import NuevoPForm from "./pages/NuevoPForm";
import BorrarProyecto from "./pages/BorrarProyecto.jsx";
import PerfilUsuario from "./pages/PerfilUsuario.jsx";
import ImagesForm from "./pages/ImagesForm";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Base />}>
                    <Route index element={<Inicio />} />
                    <Route path="/proyectos" element={<Proyectos />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/nuevo_proyecto" element={<NuevoProyecto />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/busqueda/" element={<Busqueda />} />
                    <Route path="/busqueda/:buscado" element={<Busqueda />} />
                    <Route path="/detalle/" element={<Proyectos />} />
                    <Route path="/detalle/:id" element={<Detalle />} />
                    <Route path="/nuevopform" element={<NuevoPForm />} />
                    <Route path="/funcionadmin" element={<BorrarProyecto />} />
                    <Route path="/perfilusuario" element={<PerfilUsuario />} />
                    <Route path="/imagesform" element={<ImagesForm />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
