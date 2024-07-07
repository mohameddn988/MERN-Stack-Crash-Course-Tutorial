const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//get all workouts
const getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    try {
        res.status(200).json(workouts)
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

//get a single workout
const getSingleWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({message: 'Invalid ID'})
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({message: 'Workout not found'})
    }
    try {
        res.status(200).json(workout)
    }
    catch (err) {
        res.status(500).json({message: err.message})
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
        res.status(400).json({message: err.message})
    }
}

//update a workout

//delete a workout




module.exports = {
    createWorkout,
    getAllWorkouts,
    getSingleWorkout
}