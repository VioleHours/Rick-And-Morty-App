const { Router } = require('express');
const router = Router();

//Acá se importan todos los routers
const charactersRouter = require('./Characters');
const favoritesRouter = require('./Favorites');
const episodesRouter = require('./Episodes');

//configuramos los routers

router.use('./characters', charactersRouter);
router.use('./favorites', favoritesRouter);
router.use('./episodes', episodesRouter);

module.exports = router;