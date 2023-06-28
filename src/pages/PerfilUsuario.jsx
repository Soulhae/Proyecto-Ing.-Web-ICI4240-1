import Header from "../components/Header.jsx"
import { AppContext } from "../components/AppContext.jsx"
import { useContext } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import styles from '../styles/modules/Nosotros.module.scss';

const PerfilUsuario = () => {

    const { userInfo } = useContext(AppContext);
    //console.log(typeof userInfo.userId +" a ", userInfo.userId);
    const [usuario, setUsuario] = useState(null);

    const test = async () =>{
        axios
        .get(`http://localhost:3000/usuario/${userInfo.userId}`)
        .then((response) =>{
            setUsuario(response.data);
            // console.log(usuario.datos.id);
        })
        .catch((error) =>{
            console.error(error);
            //alert("test");
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));

    }

    test();

    if (!usuario) {
        return <div>Cargando...</div>;
    }
    
  return (
    <>
    <Header/>
    <Container>
        <h1 className={`p-4 ${styles.titulo2}`}>Datos del usuario</h1>
        <Row className="m-1 my-4">
            <Col className="m-1">
                <Row className="m-auto">
                    <h3 className={`${styles.ola}`}>
                        ID: {usuario.datos.id}
                    </h3>   
                </Row>
                <Row className="m-auto">
                    <h3 className={`${styles.ola}`}>
                        Email: {usuario.datos.email}
                    </h3>
                </Row>
                <Row className="m-auto">
                    <h3 className={`${styles.ola}`}>
                        Nombre de usuario: {usuario.datos.username}
                    </h3>
                </Row>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default PerfilUsuario