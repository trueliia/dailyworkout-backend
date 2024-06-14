const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./WorkoutRoutes');
const cors = require('cors');



require('dotenv').config();

mongoose.set("strictQuery", false);

const PORT = 3000 || process.env.port;

app.use(express.json())
app.use(cors());

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err))

app.use(routes);
app.listen(PORT, () => {
    console.log(`I am listening on port ${PORT}`)
})

// GzAZNJXCxqeBDYKQ askyulya
// mongodb+srv://askyulya:<password>@workout.njc9beg.mongodb.net/?retryWrites=true&w=majority&appName=workout