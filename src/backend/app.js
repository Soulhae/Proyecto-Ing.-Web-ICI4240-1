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
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "nimabe",
});

connection.connect(function (err) {
    if (err) {
        console.error("Error conectando a la DB " + err.stack);
        return;
    }
    console.log("Conexión establecida" + connection.threadId);
});

app.get("/usuarios", function (req, res) {
    connection.query("select * from usuarios", (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send("error en el server :c");
        } else {
            res.status(200).json(results);
        }
    });
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

app.post("/nuevo_proyecto", (req, res) => {
    let id_usuario = req.body.id_usuario;
    let titulo = req.body.titulo;
    let portada = req.body.portada;
    let categoria = req.body.categoria;
    let subcategoria = req.body.subcategoria;
    let fecha = req.body.fecha;
    let descripcion = req.body.descripcion;
    let objetivo = req.body.objetivo;

    connection.query(
        "INSERT INTO proyectos (id_usuario, titulo, portada, categoria, subcategoria, fecha_lanzamiento, descripcion, objetivo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
            id_usuario,
            titulo,
            portada,
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
        "INSERT into imagenes (id_proyecto, imagen) VALUES (?, ?)",
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
