require("dotenv").config({ path: require("find-config")(".env") });

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const cripto = require("crypto");

const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

const app = express();

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: process.env.HOST_BD,
    user: process.env.USER_BD,
    password: process.env.PASSWORD_BD,
    port: process.env.PORT_BD,
    database: process.env.NAME_BD,
});

connection.connect(function (err) {
    if (err) {
        console.error("Error conectando a la DB " + err.stack);
        return;
    }
    console.log("Conexión establecida" + connection.threadId);
});

app.post("/inicio-sesion", function (req, res) {
    let email = req.body.email;
    let password = encriptar(req.body.password, "salado");

    //console.log(email, password);

    connection.query(
        "SELECT id_rol, id FROM usuarios WHERE email = ? AND password = ?",
        [email, password],
        (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).send("error en el server :c");
            } else if (results.length === 0) {
                res.status(401).send("Su usuario no se encuentra registrado");
            } else {
                res.status(200).json({ message: true, datos: results[0] });
                //console.log(results[0].id_rol);
            }
        }
    );
});

app.get("/usuario/:id", (req, res) => {
    const { id } = req.params;
    //console.log(id);

    connection.query(
        `SELECT * FROM usuarios WHERE id = ?`,
        [id],
        (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).send("error en el server :c");
            } else {
                res.status(200).json({ message: true, datos: results[0] });
            }
        }
    );
});

app.post("/registro", (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let password = encriptar(req.body.password, "salado");
    let telefono = req.body.number;
    let rol = 2;

    connection.query(
        "INSERT INTO usuarios (email, username, password, telefono, id_rol) VALUES (?, ?, ?, ?, ?)",
        [email, username, password, telefono, rol],
        function (error, results, fields) {
            if (error) throw error;
            res.send(JSON.stringify({ mensaje: true, resultado: results }));
        }
    );
});

app.post("/nuevo_proyecto/", (req, res) => {
    let id_usuario = req.body.id_usuario;
    let titulo = req.body.titulo;
    let portada = req.body.portada;
    let categoria = req.body.categoria;
    let subcategoria = req.body.subcategoria;
    let descripcion = req.body.descripcion;
    let fecha = req.body.fecha;
    let objetivo = req.body.monto;

    connection.query(
        "INSERT INTO proyectos (id_usuario, portada, titulo, categoria, subcategoria, fecha_lanzamiento, descripcion, objetivo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
            id_usuario,
            portada,
            titulo,
            categoria,
            subcategoria,
            fecha,
            descripcion,
            objetivo,
        ],
        function (error, results, fields) {
            if (error) throw error;
            res.send(JSON.stringify({ mensaje: true, resultado: results }));
        }
    );
});

app.post("/imagen", (req, res) => {
    let id = req.body.id;
    let url = req.body.url;

    connection.query(
        "INSERT INTO imagenes (id_proyecto, imagen) VALUES (?, ?)",
        [id, url],
        function (error, results, fields) {
            if (error) throw error;
            res.send(JSON.stringify({ mensaje: true, resultado: results }));
        }
    );
});

app.get("/proyectos", jsonParser, (req, res) => {
    connection.query(
        `SELECT * from proyectos order by titulo `,
        (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).send("error en el server :c");
            } else {
                res.status(200).json(results);
            }
        }
    );
});

app.post("/detalle_vista", jsonParser, (req, res) => {
    let id = req.body.id;
    // console.log(id);

    connection.query(
        `SELECT proyectos.*, usuarios.username from proyectos left join usuarios on proyectos.id_usuario = usuarios.id where proyectos.id=${id}`,
        (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).send("error en el server :c");
            } else {
                res.status(200).json(results);
                // console.log(results);
            }
        }
    );
});

app.post("/detalle_proyecto", jsonParser, (req, res) => {
    let id = req.body.id;
    // console.log(id);

    connection.query(
        `SELECT proyectos.*, usuarios.username, imagenes.imagen from proyectos left join usuarios on proyectos.id_usuario = usuarios.id right join imagenes on proyectos.id = imagenes.id_proyecto where proyectos.id=${id}`,
        (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).send("error en el server :c");
            } else {
                res.status(200).json(results);
                // console.log(results);
            }
        }
    );
});

app.post("/subcategorias", (req, res) => {
    let categoria = req.body.categoria;
    // console.log(categoria);

    connection.query(
        `select * from ${categoria} order by subcategoria`,
        (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).send("error en el server :c");
            } else {
                res.status(200).json(results);
                // console.log(results);
            }
        }
    );
});

app.post("/busqueda", jsonParser, (req, res) => {
    let buscado = req.body.buscado;
    // console.log(buscado);

    connection.query(
        `SELECT * from proyectos where titulo LIKE '%${buscado}%' or categoria LIKE '%${buscado}%' or subcategoria LIKE '%${buscado}%'`,
        (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).send("error en el server :c");
            } else {
                res.status(200).json(results);
                // console.log(results);
            }
        }
    );
});

app.put("/patrocinio", (req, res) => {
    const { monto, idUsuario, idProyecto } = req.body;

    connection.query(
        "INSERT INTO patrocinio (monto, id_usuario, id_proyecto) VALUES (?, ?, ?)",
        [monto, idUsuario, idProyecto],
        (error, results) => {
            if (error) {
                console.error(error);
                return res
                    .status(500)
                    .json({ message: "Error al crear el patrocinio" });
            }

            connection.query(
                "UPDATE proyectos SET monto = monto + ? WHERE id = ?",
                [monto, idProyecto],
                (error, results) => {
                    if (error) {
                        console.error(error);
                        return res.status(500).json({
                            message:
                                "Error al actualizar el monto del proyecto",
                        });
                    }

                    return res.status(200).json({
                        message:
                            "Patrocinio creado y monto del proyecto actualizado",
                    });
                }
            );
        }
    );
});

app.delete("/eliminarProyecto/:id", (req, res) => {
    const { id } = req.params;

    connection.query(
        `DELETE FROM proyectos WHERE id = ?`,
        [id],
        (error, results) => {
            if (error) {
                console.error("Error con la consulta: ", error);
                res.status(500).json({ message: -1 });
            } else {
                if (results.affectedRows === 0) {
                    res.status(404).json({ message: 0 });
                } else {
                    res.status(200).json({ message: 1 });
                }
            }
        }
    );
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

function encriptar(text, salt) {
    //let salt = cripto.randomBytes(16).toString('hex');
    // Hashing user's salt and password with 1000 iterations,

    let hash = cripto
        .pbkdf2Sync(text, salt, 1000, 64, `sha512`)
        .toString(`hex`);
    //console.log(salt);
    return hash;
}
