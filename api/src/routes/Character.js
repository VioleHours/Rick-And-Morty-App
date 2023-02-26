const { Router } = require('express');
const router = Router();
const { Character, Episodes } = require('../db.js');
const { getDbInfo } = require('./utils');

router.get('/', async (req, res) => {
    const { name } = req.query
    let charactersTotal = await getDbInfo();
    if ( name ) {
        let characterName = await charactersTotal.filter( el => el.name.toLowerCase().includes(name.toLowerCase()));
        characterName.length ?
            res.status(200).send(characterName) :
            res.status(404).send('No hay personaje.')
    }
})

// - GET onSearch 
// - GET Detail
// - GET favorites
// - POST favorites
// - DELETE favorites
// - Character/{ID}
// - Character/detail/{detailId}
// - GET/fav
// - POST/fav
// - DELETE/fav/${id}