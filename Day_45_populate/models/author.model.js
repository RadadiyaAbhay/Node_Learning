import mongoose from 'mongoose';

let authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    occupation: { type: String, required: true }
});

export const AuthorModel = mongoose.model('Author', authorSchema);