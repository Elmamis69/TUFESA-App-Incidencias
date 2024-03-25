const Empleado = require("../models/empleado");

class EmpleadoDAO {
    constructor(){}

    async crear(empleadoData){
        try{
            const empleado = new Empleado(empleadoData);
            return await empleado.save();
        }catch(error){
            throw Error(error)            
        }
    }

    async obtenerEmpleados(limit = 50){
        try{
            return await Empleado.find().limit(limit)
        }catch (error){
            throw Error(error)
        }
    }

    async obtenerEmpleadoPorNumEmpleadoYCorreo(numero, correo){
        try{
            return await Empleado.find({numero:numero}, {correo:correo});
        }catch(Error){
            throw Error(error)
        }
    }

    async actualizarProducto(numero, correo, empleadoData){
        const empleado = await this.obtenerEmpleadoPorNumEmpleadoYCorreo(numero, correo);
        if(!empleado){
            console.log("Empleado no existe")
        }

        return await Empleado.findOneAndUpdate(number, empleadoData, {
            new: true,
        });
    }

    async eliminarEmpleado(numero, correo){
        const empleado = await this.obtenerEmpleadoPorNumEmpleadoYCorreo(numero, correo);
        if(!empleado){
            console.log("Empleado no existe")
        }

        return await Empleado.findOneAndRemove(number);
    }
}