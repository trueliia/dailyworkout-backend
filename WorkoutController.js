const WorkoutModel = require('./WorkoutModel');

//GET

module.exports.getWorkout = async (req, res) =>{
    const myWorkout = await WorkoutModel.find();
    res.send(myWorkout)
}
//POST
module.exports.saveWorkout = async (req, res) =>{
    const { title } = req.body;
    WorkoutModel.create({ title })
    .then((data) => { console.log('Workout added')
    res.send(data)
})
}

//DELETE
module.exports.deleteWorkout = async (req, res) =>{
    const {_id} = req.body
    WorkoutModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted a workout'))
}

//EDIT
module.exports.editWorkout = async (req, res) =>{
    const {_id, title } = req.body;
    WorkoutModel.findByIdAndUpdate(_id, { title })
    .then(() => res.send('Edited a workout'))
}