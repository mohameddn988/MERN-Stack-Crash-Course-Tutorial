const express = require('express')
const {
    createWorkout,
    getAllWorkouts,
    getSingleWorkout,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workoutController') 

const router = express.Router()

//get all workouts
router.get('/', getAllWorkouts)

//get a single workout
router.get('/:id', getSingleWorkout)

//post a new workout
router.post('/', createWorkout)

//update a workout
router.patch('/:id', (req, res) => {
    res.json({message: 'UPDATE a workout'})
})

//delete a workout
router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE a workout'})
})


module.exports = router