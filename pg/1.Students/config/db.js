import pkg from 'pg';
let { Pool } = pkg;
import env from "dotenv";
env.config();

let pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

// const client = await pool.connect();
// client.release();


export default pool;