// Example file where you use the database connection
import  pool  from "./config/db.js";
import express from 'express';
import router from "./routes/index.js";
import { userTable } from "./config/table.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use('/' , router);

app.listen(PORT, () => {
    // userTable()
  console.log(`Server is listening on port ${PORT}`);
});

