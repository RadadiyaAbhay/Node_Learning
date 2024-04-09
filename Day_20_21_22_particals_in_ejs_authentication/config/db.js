const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/auth').then(()=>{
    console.log("Database Connect Successfully")
}).catch((err) =>{
    console.log("err" ,err);
})

module.exports = mongoose;