import mongoose from "mongoose";
import env from 'dotenv'
env.config()

mongoose.connect(process.env.URL).then(() => {
    console.log("database Connected Successfully");
}).catch((err) => {
    console.log(err);
})

export default mongoose;