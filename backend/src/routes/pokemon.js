const {Router} = require('express')
const router = Router()

const { createPoke, getAllPokemon, getPokemon, deletePoke, updatePoke } = require('../controller/usuario.controller')

router.route('/')
    .get(getAllPokemon)
    .post(createPoke)

router.route('/:id')
    .get(getPokemon)
    .delete(deletePoke)
    .put(updatePoke)

module.exports = router