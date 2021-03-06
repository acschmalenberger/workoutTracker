const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
//following structure from seed
    day:{
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Exercise Type required",
            },
        
            name:{
                type: String,
                trim: true,
                required: "Exercise Name required",
            },

            duration: {
                type: Number,
                required: "Enter Duration of exercise",
                trim: true,
            }, 

            weight: {
                type: Number,
                trim: true,
            },

            reps:{
                type: Number,
                trim: true,
            },

            sets: {
                type: Number,
                trim: true,
            },
        
            distance:{
                type: Number,
                trim: true,
            },
        

        }
    ]
    
    
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;