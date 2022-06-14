const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonsRoutes = require("./pokemons");
const typesRoutes = require("./types");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//----- Routes Config -----
router.use("/", pokemonsRoutes);
router.use("/", typesRoutes);

module.exports = router;


