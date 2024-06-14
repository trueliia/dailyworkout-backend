const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
    }
})

module.exports = mongoose.model('Workout', workoutSchema)