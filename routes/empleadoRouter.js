const express = require('express');
const EmpleadoController = require('../controllers/empleadoController')
const router = express.Router();

router.get('/', EmpleadoController.crearEmpleado);

module.exports = router;