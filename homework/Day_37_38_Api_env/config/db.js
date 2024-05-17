import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";


mongoose.connect(process.env.DB_URL).then((res) =>{
    console.log('Connected to MongoDB');
}).catch((err) =>{
    console.log(err);
})

export default mongoose;