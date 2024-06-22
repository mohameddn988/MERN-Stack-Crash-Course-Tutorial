const express = require('express')

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
router.post('/', (req, res) => {
    res.json({message: 'POST a new workout'})
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