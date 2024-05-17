import express from  'express';
import bookRoutes from './book.routes.js';
import authorRoutes from './author.routes.js';
let routes =  express.Router();

// routes.use('/' ,(req ,res) =>{
//     res.json({message : "Welcome to the Bookstore API"});
// })
routes.use('/book',bookRoutes)
routes.use('/author',authorRoutes)

export default routes