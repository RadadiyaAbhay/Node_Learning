const express = require('express')
const router = express.Router()
const productModel = require('./../models/product.model')
const upload = require('./../middlewares/multer')
const fs = require ('fs')

router.get('/', async (req, res) => {
    const products = await productModel.find({})
    console.log("Products Get Successfully");

    res.render('index', { products })
})

router.get(('/view'), async (req, res) => {
    res.render('add')
})

router.post("/add", upload.single('fileImg'), async (req, res) => {
    let { id } = req.body;
    console.log(req.file);

    if (id) {
        await productModel.findByIdAndUpdate(id,{
            title: req.body.title,
            price: req.body.price,
            rating: req.body.rating,
            description: req.body.description,
            discount: req.body.discount,
            brand: req.body.brand,
            category: req.body.category
        })

        console.log("Product Update Successfully");

    } else {

        const product = productModel({
            title: req.body.title,
            price: req.body.price,
            rating: req.body.rating,
            description: req.body.description,
            discount: req.body.discount,
            brand: req.body.brand,
            category: req.body.category,
            fileImg : req.file.filename
        })

        await product.save();
        console.log("Product Save Successfully");
    }
    res.redirect('/');
})

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    const product =  await productModel.findOne({ _id: id });
    console.log(product);
    try {
    fs.unlinkSync(`./uploads/${product.fileImg}`)
    }catch(err){
        console.log(err);
    }
    await productModel.deleteOne({ _id: id });
    console.log("Product Delete Successfully");
    res.redirect('/')
})
router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const product = await productModel.findOne({ _id: id });
    console.log("Product Find Successfully");
    res.render('update', { product });
})

module.exports = router