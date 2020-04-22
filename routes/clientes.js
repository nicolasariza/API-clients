// Rutas para crear usuarios
const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");
const { check } = require("express-validator");

// Crea un cliente
// api/cientes
router.post(
  "/",
  check("nombre", "El nombre es obligatorio").not().isEmpty(),
  check("email", "Agrega un email valido").isEmail(),
  clienteController.crearCliente
);

// Obtener todos los proyectos
router.get('/',auth,clienteController.obtenerClientes);

module.exports = router;