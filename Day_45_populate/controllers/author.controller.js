import { AuthorModel } from "../models/author.model.js"

export const getauthors = async (req, res) => {
    try {
        let data = await AuthorModel.find({});
        res.json({ message: 'Author List', data: data })
    } catch (error) {
        res.status(500).json({ message: 'server error' })
    }
}

export const getauthor = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await AuthorModel.find({ _id: id });
        res.json({ message: 'Author', data: data })
    } catch (error) {
        res.status(500).json({ message: 'server error' })
    }
}
export const postauthor =async (req, res) => {
    console.log(req.body);
    try {
        let {name ,occupation} = req.body;

        let data = new AuthorModel({
            name ,
            occupation
        })

        await data.save();
        res.json({ message: 'Author Added' })
    } catch (error) {
        res.status(500).json({ message: 'server error' })
    }
}
export const putauthor = async (req, res) => {
    try {
        let { id } = req.params;
        let data = req.body;

        await AuthorModel.findByIdAndUpdate(id, data);
        res.json({ message: 'Author Updated' })
    } catch (error) {
        res.status(500).json({ message: 'server error' })
    }
}
export const deleteauthor = async (req, res) => {
    try {
        let { id } = req.params;
        await AuthorModel.findByIdAndDelete(id);
        res.json({ message: 'Author Deleted' })
    } catch (error) {
        res.status(500).json({ message: 'server error' })
    }
}