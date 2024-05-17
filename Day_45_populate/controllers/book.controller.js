import { BookModel } from "../models/book.model.js"
import mongoose from "mongoose";

export const getbooks = async (req, res) => {
    try {
        await BookModel.find({}).populate("author").then((data) =>{
            res.json({ message: 'Books', data})
        }).catch((err) =>{
            console.log(err);
            res.status(500).json({ message: 'server error' })
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'server error' })
    }
}

export const getbook = async (req, res) => {
    try {
        let { id } = req.params;
        await BookModel.find({ _id: id }).populate("author").then((data) =>{
            res.json({ message: 'Books', data})
        }).catch((err) =>{
            res.status(500).json({ message: 'server error' })
        })
    } catch (error) {
        res.status(500).json({ message: 'server error' })
    }
}
export const postbook = async (req, res) => {
    console.log(req.body);
    try {
        let { title, pages, author } = req.body;

        let data = new BookModel({
            title,
            pages,
            author
        })

        await data.save();
        res.json({ message: 'Book Added' })
    } catch (error) {
        res.status(500).json({ message: 'server error' })
    }
}
export const putbook = async (req, res) => {
    try {
        let { id } = req.params;
        let data = req.body;

        await BookModel.findByIdAndUpdate(id, data);
        res.json({ message: 'Book Updated' })
    } catch (error) {
        res.status(500).json({ message: 'server error' })
    }
}
export const deletebook = async (req, res) => {
    try {
        let { id } = req.params;
        await BookModel.findByIdAndDelete(id);
        res.json({ message: 'Book Deleted' })
    } catch (error) {
        res.status(500).json({ message: 'server error' })
    }
}