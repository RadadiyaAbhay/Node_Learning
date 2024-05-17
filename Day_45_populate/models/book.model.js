import mongoose from 'mongoose';

let bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Author", required: true },
    pages: { type: Number, required: true },
});

export const BookModel = mongoose.model('Book', bookSchema);