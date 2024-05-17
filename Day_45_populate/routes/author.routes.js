import express from  'express';
import { deleteauthor, getauthor, getauthors, postauthor, putauthor } from '../controllers/author.controller.js';
let authorRoutes =  express.Router();

authorRoutes.get('/' , getauthors)
authorRoutes.get('/:id' , getauthor)
authorRoutes.post('/' ,postauthor)
authorRoutes.put('/:id' ,putauthor)
authorRoutes.delete('/:id' ,deleteauthor)

export default authorRoutes