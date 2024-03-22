const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
    numero:{
        type: number,
        required: true
    },

    correo: {
        type: String,
        required: true
    },

    RFC: {
        type: String,
        required: true
    }
})

module.exports = moongose.module('empleado', empleadoSchema);