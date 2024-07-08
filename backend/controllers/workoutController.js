const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//get all workouts
const getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    try {
        res.status(200).json(workouts)
    }
    catch (err) {
        res.status(500).json({error: err.message})
    }
}

//get a single workout
const getSingleWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'Invalid ID'})
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({error: 'Workout not found'})
    }
    try {
        res.status(200).json(workout)
    }
    catch (err) {
        res.status(500).json({error: err.message})
    }  
}

//create a new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body
    try {
        const workout =await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }
    catch (err) {
        res.status(400).json({error: err.message})
    }
}

//update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'Invalid ID'})
    }
    
    const updatedWorkout = await Workout.findByIdAndUpdate({_id: id}, {...req.body})
     
    if (!updatedWorkout) {
        return res.status(404).json({error: 'Workout not found'})
    }
    try {
        res.status(200).json(updatedWorkout)
    }
    catch (err) {
        res.status(500).json({error: err.message})
    }
}

//delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'Invalid ID'})
    }
    
    const workout = await Workout.findByIdAndDelete({_id: id})
    
    if (!workout) {
        return res.status(404).json({error: 'Workout not found'})
    }
    try {
        res.status(200).json({error: 'Workout deleted successfully'})
    }
    catch (err) {
        res.status(500).json({error: err.message})
    }
}




module.exports = {
    createWorkout,
    getAllWorkouts,
    getSingleWorkout,
    updateWorkout,
    deleteWorkout
}