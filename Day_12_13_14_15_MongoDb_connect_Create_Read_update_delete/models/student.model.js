const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    grid : String,
    name : String,
    age: Number,
    gender: String ,
    email: String,
    course : String
},
{timestamps: true})

const studentModel = mongoose.model("students", studentSchema)

module.exports = studentModel;