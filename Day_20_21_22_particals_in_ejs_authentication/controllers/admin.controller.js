const adminModel = require("../models/admin.model");
var admin;
const defaultRoute = async (req, res) => {
    const {setId} = req.cookies;
    if(setId){
        admin = await adminModel.findById(setId);
        res.render('index' , {admin});
    }else{
        res.redirect('/signin')
    }
}
const signIn = (req, res) => {
    res.render('signin');
}
const signUp = (req, res) => {
    res.render('signup');
}

const register = async (req, res) => {
    let { name, email, password } = req.body;
    try {

        let admin = new adminModel({
            name,
            email,
            password
        })

        await admin.save();
        console.log("Admin Save Successfully");
        res.redirect('/signin');
    } catch (err) {
        console.log(err);
        res.redirect('/signup');
    }
}
const login = (req, res) => {
    const { email, password } = req.body;

    try {
        adminModel.findOne({ email }).then((data) => {
            if (data != null) {
                if (password == data.password) {
                    res.cookie('setId' , data.id);
                    console.log("login Successfully");
                    res.redirect('/')
                } else {
                    res.redirect('/signin')
                }
            } else {
                console.log("user not found");
                res.redirect('/signup')
    
            }
        }).catch((err) => {
            console.log(err);
        })
        
    } catch (err) {
        console.log(err);
        res.redirect('/signin')
    }
}

const logout = (req ,res) =>{
    res.clearCookie('setId');
    res.redirect('/signin');
}

module.exports = { signIn, signUp, register, login, defaultRoute , logout };

