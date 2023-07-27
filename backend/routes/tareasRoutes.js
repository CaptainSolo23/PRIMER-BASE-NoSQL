const express = require('express')
const router = express.Router()
const { getTareas, createTareas, updateTareas, deleteTareas } = require('../controlers/tareasControllers')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getTareas).post(protect, createTareas) // rutas implementando funcion protectora

// router.get('/', getTareas)
// router.post('/', createTareas) rutas antes de implementar la funcion protectora


router.route('/:id').delete(protect, deleteTareas).put(protect, updateTareas) //rutas implementando funcion protectora

// router.put('/:id', updateTareas )
// router.delete('/:id', deleteTareas ) rutas antes de implementar la funcion protectora

module.exports = router