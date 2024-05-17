import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import db from './config/db.js'
import routes from "./routes/index.js";

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use('/' ,routes)
app.listen(port , () =>{
    console.log( `Server is running on port ${port}`);
})