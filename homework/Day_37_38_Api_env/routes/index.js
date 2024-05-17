import express from 'express';
import { addStudent, allStudent } from '../controllers/student.controller.js';

const routes = express.Router();

routes.get('/' ,allStudent)

routes.post('/' , addStudent)

export default routes;  