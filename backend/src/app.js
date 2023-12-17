const express = require('express')
const cors = require('cors')

const app = express();

//configuracion

app.set('port', process.env.PORT || 4000)  //le decimos a pp que nos guarde la variable port y si no existe en el .env que lo haga en el 4000

// Middlewares 

app.use(cors())
app.use(express.json())

// Rutas

app.get('/', (req, res) =>{
res.send('Bienvenido a mi pokeAPI particular')
})

// Ruta para nuestra API de usuario

app.use('/api/pokemon', require('./routes/pokemon'))

module.exports = app;
