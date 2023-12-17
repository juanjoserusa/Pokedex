const {Schema, model} = require('mongoose')

const pokemonSchema = new Schema({
    nombre: String,
    type: [String],
    evolution: String,
    img: String,
},{
    timestamps: true
})

module.exports = model('Pokemon', pokemonSchema)

