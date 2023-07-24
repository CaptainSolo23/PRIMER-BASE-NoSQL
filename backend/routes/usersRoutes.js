const express = require('express')
const router = express.Router()

const {registerUser, loginUser, getUserData } = require('../controlers/usersControllers.js')

const { protect } = require ('../middleware/AuthMiddleware')

//rutas publicas
router.post('/', registerUser)
router.post('/login', loginUser)

//ruta privada
router.get('/getMe', protect, getUserData)

module.exports = router
