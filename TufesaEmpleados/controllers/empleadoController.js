const EmpleadoDAO = require("../dataAccess/empleadoDAO");
const { AppError } = require("../utils/appError");

class EmpleadoController {
  static async crearEmpleado(req, res, next) {
    try {
      const { numero, correo, RFC } = req.body;
      if (!numero || !correo || !RFC) {
        return next(new AppError("Faltan campos requeridos", 400));
      }

      const empleadoData = {numero, correo, RFC};
      const empleado = await EmpleadoDAO.crear();
      console.log(empleadoData)
      res.status(201).json(empleado);

    } catch (e) {
      next(new AppError("Error al crear empleado", 500));
    }
  }
}

module.exports = EmpleadoController;
