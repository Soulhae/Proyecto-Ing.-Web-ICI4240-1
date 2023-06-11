const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.json());
app.use(cors());

app.post('/usuarios', (req, res) => {
  const nuevosUsuarios = req.body;

  const filePath = './src/data/usuarios.json';

  fs.readFile(filePath, 'utf8' , (err, data) =>{

    if(err){
        console.error('Error al leer el archivo JSON:', err);
        res.status(500).send('Error al leer el archivo JSON');
        return;
    }

    let usuarios = [];

    try{
        usuarios = JSON.parse(data);
    } catch (parseError){
        console.error('Error al analizar el archivo JSON existente:', parseError);
        res.status(500).send('Error al analizar el archivo JSON existente');
        return;
    }

    const updatedUsuarios = [...usuarios, nuevosUsuarios];
    const usuariosJSON = JSON.stringify(updatedUsuarios);

    fs.writeFile(filePath, usuariosJSON, (writeErr) => {
        if (writeErr) {
          console.error('Error al guardar el usuario:', writeErr);
          res.status(500).send('Error al guardar el usuario');
        } else {
          console.log('Usuario creado y guardado exitosamente');
          res.sendStatus(200);
        }
    });
  });
});

// app.get('/test', (req, res) => {
//     console.log('hola get test');
//     res.sendStatus(200);
// });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});