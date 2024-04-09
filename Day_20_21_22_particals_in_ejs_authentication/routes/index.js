const express = require('express');
const routes = express.Router();
const adminController = require('./../controllers/admin.controller')
const blogController = require('./../controllers/blog.controller')
const upload = require('./../middlewares/multer')

routes.get('/', adminController.defaultRoute)
routes.get('/signin', adminController.signIn)
routes.get('/signup', adminController.signUp)
routes.post('/register', adminController.register)
routes.get('/logout', adminController.logout)
routes.post('/login', adminController.login)


routes.get('/add', blogController.add)
routes.get('/viewallpost', blogController.viewallpost)
routes.get('/viewuserpost', blogController.viewuserpost)
routes.get('/deletepost/:id', blogController.deletepost)
routes.get('/edit/:id', blogController.edit)
routes.post('/addblog', upload.array('images',12) , blogController.addBlog)
routes.post('/editblog', upload.array('images',12) , blogController.editBlog)
module.exports = routes;