const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    email: String,
    password: String,
    nombre: String,
    telefono_fijo: String,
    telefono_movil: String,
    especialidad: String,
    razon: String,
    pais: String,
    estado: String,
    ciudad: String,
    direccion: String,
    mensaje: String
});

module.exports = mongoose.model('client',clientSchema,'clients');