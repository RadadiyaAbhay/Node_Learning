import express, { urlencoded } from  'express';
import env  from 'dotenv'
import db from './config/db.js'
import routes from './routes/index.js';
env.config()
let app = express();
let port = process.env.PORT;

app.use(express.json());
app.use(urlencoded({extended : true}))
app.use('/',routes )

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
})