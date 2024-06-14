const { Router } = require('express');
const { getWorkout, saveWorkout, deleteWorkout, editWorkout } = require('./WorkoutController')

const router = Router();

router.get('/', getWorkout);
router.post('/saveWorkout', saveWorkout)
router.post('/deleteWorkout', deleteWorkout)
router.put('/editWorkout', editWorkout)

module.exports = router;