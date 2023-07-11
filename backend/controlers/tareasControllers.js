const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareasModel')


const getTareas = asyncHandler (async (req,res) => {
    
    const tareas = await Tarea.find()

    res.status(200).json(tareas)})

const createTareas = asyncHandler(async (req,res) => {

    if(!req.body.texto){
        res.status(400)
        throw new Error('porfavor teclea una descripcion')
    }

    const tarea = await Tarea.create({
        texto: req.body.texto
    })
        res.status(201).json(tarea)  
})

const updateTareas = asyncHandler(async (req,res) => { 
    const tarea = await Tarea.findById(req.params.id)
    if(!tarea){
        res.status(400)
        throw new Error('La tarea no existe')
    }
    const tareaUpdated = await Tarea.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(tareaUpdated)})

const deleteTareas = asyncHandler(async (req,res) => {
    const tarea = await Tarea.findById(req.params.id)
    if(!tarea){
        res.status(400)
        throw new Error('La tarea no existe')
    }

    tarea.deleteOne()
    // const tareaDeleted = await Tarea.findByIdAndDelete(req.params.id)

    res.status(200).json({ message: `Borrar la tarea con id ${req.params.id}`})})

module.exports = {
    getTareas,
    createTareas,
    updateTareas,
    deleteTareas
}