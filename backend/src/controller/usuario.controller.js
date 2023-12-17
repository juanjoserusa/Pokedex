const pokemonCtrl = {}

const Pokemon = require('../models/Pokemon')

pokemonCtrl.getAllPokemon = async(req, res) =>{
    const Pokemons = await Pokemon.find()
    res.json(Pokemons)
}

// pokemonCtrl.createPoke = async(req, res) =>{
//     const {nombre, type, evolution, img, } = req.body
//     const newUsu = new Pokemon({
//         nombre: nombre,
//         type: type,
//         evolution: evolution,
//         img: img,
        
//     })
//     await newUsu.save();
//     res.json({message : "El pokemon ha sido creado"})
// }

pokemonCtrl.createPoke = async (req, res) => {
    try {
        const pokemonList = req.body;

        // Verificar si la solicitud incluye una lista de Pokémon
        if (!Array.isArray(pokemonList)) {
            return res.status(400).json({ message: 'La solicitud debe contener una lista de Pokémon.' });
        }

        // Crear un array para almacenar las promesas de guardado
        const savePromises = pokemonList.map(async (pokemon) => {
            const { nombre, type, evolution, img } = pokemon;
            const newPokemon = new Pokemon({
                nombre,
                type,
                evolution,
                img,
            });
            await newPokemon.save();
        });

        // Esperar a que se completen todas las promesas de guardado
        await Promise.all(savePromises);

        res.json({ message: 'Los Pokémon han sido creados exitosamente.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
}

pokemonCtrl.getPokemon = async(req, res) =>{
    const Pokemon = await Pokemon.findById(req.params.id)
    res.json(Pokemon)
}

pokemonCtrl.deletePoke = async(req, res) =>{
    await Pokemon.findByIdAndDelete(req.params.id)
    res.json({message : 'el Pokemon ha sido eliminado'})
}

pokemonCtrl.updatePoke = async(req, res) =>{
    const {nombre, apellido, correo, telefono, edad} = req.body
    await Pokemon.findByIdAndUpdate(req.params.id, {
        nombre,
        apellido,
        edad,
        correo,
        telefono
    })
    res.json({message : 'El Pokemon ha sido actualizado'})
}

module.exports = pokemonCtrl