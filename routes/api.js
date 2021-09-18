const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.get('/workouts', (req, res) => {
    Workout.aggregate([{
        $addFields:{
            totalDuration:{
                $sum:"$exercises.duration"
            }
        }
    }])
    .then(workoutData => {
        res.json(workoutData)
    })
})


router.get('/workouts/range', (req, res) => {
    Workout.aggregate([{
        $addFields:{
            totalDuration:{
                $sum:"$exercises.duration"
            }
        }
    }]).limit(7)
    .then(workoutData => {
        res.json(workoutData)
    })
})

// Add an exercise to a workout
router.put('/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(
        {_id: req.params.id},
        {$addToSet: {exercises: [req.body]}}
    )
    .then(workoutData => {
        res.json(workoutData)
    })
})

// Create workout
router.post('/workouts/ran321312ge', (req, res) => {
    Workout.aggregate([{
        $addFields:{
            totalDuration:{
                $sum:"$exercises.duration"
            }
        }
    }]).limit(7)
    .then(workoutData => {
        res.json(workoutData)
    })
})



module.exports = router;