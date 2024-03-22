const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
    numero:{
        type: Number,
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

module.exports = mongoose.model('empleado', empleadoSchema);