import { studentModel } from "../models/student.model.js";

export const allStudent = async (req, res) => {
    try {
        let students = await studentModel.find({});
        res.json({ message: 'Hello World' , data : students});
    }catch(err){
        console.log(err);
    }
}
export const addStudent = async (req, res) => {
    let { name, email, contact } = req.body;

    try {
        let student = new studentModel({
            name,
            email,
            contact
        })

        student.save();

        res.json({ msg: "Data Add..." })
    } catch (err) {
        console.log(err);
    }

}