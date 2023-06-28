import axios from "axios"
import { useState } from "react";
import Header from "../components/Header.jsx"
import Vista from "../components/VistaProyectoAdmin.jsx";
import { Container } from "react-bootstrap";
import styles from "../styles/modules/Proyectos.module.scss";

const BorrarProyecto = () => {
  const [proyectos, setProyectos] = useState([]);

  axios
      .get("http://localhost:3000/proyectos")
      .then((response) =>{
        //console.log(response.data);
        setProyectos(response.data);
      })
      .catch((error) =>{
        console.error(error);
      });

  return (
    <>
    <Header />
    <Container>
        <main className={`${styles.main} py-4 px-3`}>
            <div className="">
                <h1 className={`${styles.titulo}  mb-3`}>Proyectos</h1>
            </div>

            <div className="d-flex justify-content-center">
                <div className={`${styles.caja} album py-4 bg-light `}>
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 ">
                            {proyectos.map((proyecto) => (
                                <div className="col" key={proyecto.id}>
                                    <Vista id={proyecto.id} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </Container>
    </>
  )
}

export default BorrarProyecto