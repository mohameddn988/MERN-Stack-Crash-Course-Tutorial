const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

//get all workouts
router.get('/', (req, res) => {
    res.json({message: 'GET all workouts'})
})

//get a single workout
router.get('/:id', (req, res) => {
    res.json({message: 'GET a single workout'})
})

//post a new workout
router.post('/',async (req, res) => {
    const {title, load, reps} = req.body
    try {
        const workout =await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }
    catch (err) {
        res.status(400).json({message: err.message})
    }
})

//update a workout
router.patch('/:id', (req, res) => {
    res.json({message: 'UPDATE a workout'})
})

//delete a workout
router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE a workout'})
})


module.exports = router