import express from  'express';
import { deletebook, getbook, getbooks, postbook, putbook } from '../controllers/book.controller.js';
let bookRoutes =  express.Router();

bookRoutes.get('/' , getbooks)
bookRoutes.get('/:id' , getbook)
bookRoutes.post('/' ,postbook)
bookRoutes.put('/:id' ,putbook)
bookRoutes.delete('/:id' ,deletebook)

export default bookRoutes