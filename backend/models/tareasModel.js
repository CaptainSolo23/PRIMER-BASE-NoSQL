const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    texto: {
        type: String,
        required: [true, 'Porfavor teclea una descripcion a la tarea']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Tarea', tareaSchema)