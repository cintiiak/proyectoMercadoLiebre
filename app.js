const express = require ('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

/**
 * Metodo listen para levantar el servidor 
 */
app.listen (3000,()=>{
    console.log(`Servidor corriendo.. Listening on port http://localhost:${port}`)
})

/**
 * Path del Home 
 */
app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, '/views/home.html'));
})

/**
 * Acceso a carpeta public estatica
 */
app.use(express.static('public'));

