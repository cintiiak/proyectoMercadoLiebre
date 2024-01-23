const express = require ('express');
const path = require('path');
const app = express();
/**
 * const port = process.env.PORT || 3000;

 * Metodo listen para levantar el servidor 
 
app.listen (3000,()=>{
    console.log(`Servidor corriendo.. Listening on port http://localhost:${port}`)
})

*/

const PORT  = process.env.PORT || 3000;

app.listen(PORT,() => console.log(`Server up on PORT:  http://localhost:${PORT}`))

/**
 * Path del Home 
 */
app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, '/views/home.html'));
})

/**
 * 
 */
app.get('/register',(req,res) =>{
    res.sendFile(path.join(__dirname, '/views/register.html'));
})

/**
 * 
 */
app.get('/login',(req,res) =>{
    res.sendFile(path.join(__dirname, '/views/login.html'));
})

/**
 * Acceso a carpeta public estatica
 */
app.use(express.static('public'));

