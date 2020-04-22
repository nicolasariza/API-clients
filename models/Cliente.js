const mongoose = require('mongoose');

const ClientesSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    email :{
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    registro :{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Cliente', ClientesSchema);