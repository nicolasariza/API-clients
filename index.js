const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Crear el servidor
const app = express();

//conectar a la base de datos
conectarDB();

// habilitar cors
app.use(cors());

// Habilitar express.json (remplaza body parser)
app.use(express.json({extended:true}));

// Definir la pagina principal
app.get('/', (req, res) => {
    res.send('Api works');
});

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/clientes', require('./routes/clientes'));

// Puerto de la app 
const PORT = process.env.PORT || 4000;

// Arrancar la app
app.listen(PORT, '0.0.0.0', () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`);
    
})