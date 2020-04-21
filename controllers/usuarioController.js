const Usuario = require('../models/Usuario');
const { validationResult } = require('express-validator');

exports.crearUsuario = async (req, res) => {

    // revisar si hay errores 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errores: errors.array()});
    }

    // extraer email
    const { email } = req.body; 
    try {

        // Revisar que el email registrado sea unico

        let usuario = await Usuario.findOne({ email });

        if(usuario){
            return res.status(400).json({msg: 'El usuario ya existe'});
        }

        // crea el nuevo usuario
        usuario = new Usuario(req.body);

        // Hashear el password
        //const salt = await bcryptjs.genSalt(10);
        //usuario.password = await bcryptjs.hash(password, salt);

        // guardar usuario
        await usuario.save();

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
        
    }
    
}