import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    contact: { type: String, required: true }
}, { timestamps: true })

export const studentModel = mongoose.model('student' , studentSchema)