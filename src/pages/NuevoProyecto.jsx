import { useState } from "react";
import styles from "../styles/modules/Register.module.scss";
import { Container } from "react-bootstrap";
import { Button, Col, Row } from "react-bootstrap";

function NuevoProyecto() {

  return (
    <Container>
        <Container className="p-4 py-5">
          <h1 className={`p-4 ${styles.titulo2}`}>¿Quiénes Somos?</h1>
          <Row className="m-1 my-4">
            <Col className="m-auto">
              <Row>
                <img
                src="https://media.istockphoto.com/id/1212742343/es/foto/grupo-de-trabajadores-de-negocios-de-pie-golpeando-los-pu%C3%B1os-en-la-oficina.jpg?s=612x612&w=0&k=20&c=Ja2V74xBZXJgXJnEK3hsF1BA3CZdBEwJXGdRKEnAUk8="
                alt="Puños"
                className={`${styles.fotitos}`}
              />
              </Row>
              
            </Col>
            <Col className="m-auto">
                <Row>
                <h3 className={`${styles.ola}`}>
                  "At vero eos et accusamus et iusto odio dignissimos ducimus
                  qui blanditiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias excepturi sint occaecati
                  cupiditate non provident, similique sunt in culpa qui officia
                  deserunt mollitia animi, id est laborum et dolorum fuga. Et
                  harum quidem rerum facilis est et expedita distinctio.{" "}
                </h3>
                <Button className={styles.BotonLogin} size="lg" active type="submit">
          Registrarse
        </Button>
              </Row>
            </Col>
          </Row>
          <Row className="m-1">
            <Col className="m-auto">
            </Col>
          </Row>
        </Container>
    </Container>
  );
}

export default NuevoProyecto;
