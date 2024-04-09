const express  = require('express');
const router = express.Router();
const studentModel = require('./../models/student.model')

router.get('/' ,(req ,res) =>{
    res.render('index');
})
router.get('/view',async (req,res) =>{
    let students = await studentModel.find({});
    res.render('view' , {students})
})
router.post('/addstudent' , (req,res) =>{
    const student = new studentModel ({
        grid : req.body.grid,
        name : req.body.name,
        age: req.body.age,
        gender: req.body.gender ,
        email: req.body.email,
        course : req.body.course
    })
    student.save();
    res.redirect('/view')
})
module.exports =  router;