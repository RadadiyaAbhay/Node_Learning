const blogModel = require('./../models/blog.model');
const adminModel = require('./../models/admin.model');
const fs = require('fs')

var admin;
const add = async (req, res) => {
    const { setId } = req.cookies;
    if (setId) {
        admin = await adminModel.findById(setId);
        res.render('add', { admin });
    } else {
        res.redirect('/signin')
    }
}
const viewallpost = async (req, res) => {
    let blogs = await blogModel.find()
    res.render('viewallpost', { admin, blogs });
}
const viewuserpost = async (req, res) => {
    const { setId } = req.cookies;
    let blog = await blogModel.find({ userId: setId });
    res.render('viewuserpost', { admin, blog });
}

const addBlog = async (req, res) => {
    const { title, content, category, description } = req.body;
    const images = [];
    req.files.forEach(element => {
        images.push(element.filename);
    });

    const blog = new blogModel({
        title,
        images,
        content,
        category,
        description,
        userId: admin._id,
        author: admin.name
    })

    await blog.save();
    res.redirect('/');
}
const deletepost = async (req, res) => {
    const { id } = req.params;
    const blog = await blogModel.findOne({ _id: id })

    try {
        blog.images.map((img) => {
            fs.unlinkSync(`./uploads/${img}`)
        })
    } catch (err) {
        console.log("img not delete");
    }
    await blogModel.deleteOne({ _id: id })
    res.redirect('/viewuserpost')
}

const edit = async (req, res) => {
    const { id } = req.params;
    const blog = await blogModel.findOne({ _id: id })
    res.render("edit", { admin, blog });
}
const editBlog = async (req, res) => {
    const { title, content, category, description, id } = req.body;
    let imagess = [];
    let pastBlog = await blogModel.findOne({ _id: id });
    req.files.forEach(element => {
        imagess.push(element.filename);
    });

    if (imagess.length == 0) {
    console.log(pastBlog);

        imagess = pastBlog.images
    } else {
        try {
            pastBlog.images.map((img) => {
                fs.unlinkSync(`./uploads/${img}`)
            })
        } catch (err) {
            console.log("img not delete");
        }
    }

    const blog = {
        title,
        images :imagess,
        content,
        category,
        description
    }

    await blogModel.findByIdAndUpdate(id, blog);
    res.redirect('/viewuserpost');
}
module.exports = { add, addBlog, viewuserpost, viewallpost, deletepost, edit, editBlog };