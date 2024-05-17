import express from 'express';
import routes  from './routes/index.js';

const app = express();

const port = 3001;

app.use(express.json()); // Parse incoming requests data as JSON
app.use('/', routes);


app.listen(port, ()=>{
    console.log("Server run.. ",port);
});