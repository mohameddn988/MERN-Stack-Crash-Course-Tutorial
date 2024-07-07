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
router.patch('/:id', updateWorkout)

//delete a workout
router.delete('/:id', deleteWorkout)


module.exports = router