const express = require('express');
const app = express();
const port = 3000;

app.use('/' ,(req , res) =>{
    console.log("Home Route")
})
app.listen(port , () =>{
    console.log( `Server is running on port ${port}`);
})