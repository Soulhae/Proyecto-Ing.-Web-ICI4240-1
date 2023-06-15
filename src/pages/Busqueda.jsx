import { Container, Table } from "react-bootstrap";
import styles from "../styles/modules/Busqueda.module.scss";

const Busqueda = () => {
  return (
    <Container className="p-4 py-5">
      <h1 className={`p-4 ${styles.titulo2}`}>Resultados de la busqueda</h1>
      <Table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre del proyecto</th>
            <th scope="col">Categoría</th>
            <th scope="col">Monto recaudado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td><a href="/">Proyecto de Ejemplo 1</a></td>
            <td>Juegos</td>
            <td>$ 9999</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td><a href="/">Proyecto de Ejemplo 2</a></td>
            <td>Arte</td>
            <td>$ 7777</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td><a href="/">Proyecto de Ejemplo 3</a></td>
            <td>Negocios</td>
            <td>$ 3333</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td><a href="/">Proyecto de Ejemplo 4</a></td>
            <td>Juegos</td>
            <td>$ 9999</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td><a href="/">Proyecto de Ejemplo 5</a></td>
            <td>Arte</td>
            <td>$ 7777</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td><a href="/">Proyecto de Ejemplo 6</a></td>
            <td>Negocios</td>
            <td>$ 3333</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td><a href="/">Proyecto de Ejemplo 7</a></td>
            <td>Juegos</td>
            <td>$ 9999</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td><a href="/">Proyecto de Ejemplo 8</a></td>
            <td>Arte</td>
            <td>$ 7777</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td><a href="/">Proyecto de Ejemplo 9</a></td>
            <td>Negocios</td>
            <td>$ 3333</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td><a href="/">Proyecto de Ejemplo 10</a></td>
            <td>Juegos</td>
            <td>$ 9999</td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td><a href="/">Proyecto de Ejemplo 11</a></td>
            <td>Arte</td>
            <td>$ 7777</td>
          </tr>
          <tr>
            <th scope="row">12</th>
            <td><a href="/">Proyecto de Ejemplo 12</a></td>
            <td>Negocios</td>
            <td>$ 3333</td>
          </tr>
          <tr>
            <th scope="row">13</th>
            <td><a href="/">Proyecto de Ejemplo 13</a></td>
            <td>Juegos</td>
            <td>$ 9999</td>
          </tr>
          <tr>
            <th scope="row">14</th>
            <td><a href="/">Proyecto de Ejemplo 14</a></td>
            <td>Arte</td>
            <td>$ 7777</td>
          </tr>
          <tr>
            <th scope="row">15</th>
            <td><a href="/">Proyecto de Ejemplo 15</a></td>
            <td>Negocios</td>
            <td>$ 3333</td>
          </tr>
          <tr>
            <th scope="row">16</th>
            <td><a href="/">Proyecto de Ejemplo 16</a></td>
            <td>Juegos</td>
            <td>$ 9999</td>
          </tr>
          <tr>
            <th scope="row">17</th>
            <td><a href="/">Proyecto de Ejemplo 17</a></td>
            <td>Arte</td>
            <td>$ 7777</td>
          </tr>
          <tr>
            <th scope="row">18</th>
            <td><a href="/">Proyecto de Ejemplo 18</a></td>
            <td>Negocios</td>
            <td>$ 3333</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default Busqueda;