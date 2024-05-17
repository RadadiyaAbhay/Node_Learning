import pool from "./db.js";

export let userTable = async () => {
    try {
        await pool.query('CREATE TABLE IF NOT EXISTS students (id SERIAL PRIMARY KEY ,name VARCHAR(255), email VARCHAR(255) UNIQUE, password VARCHAR(255))').then((res) =>{
            console.log("Table Create Successfully");
        }).catch((err)=>{
            console.log(err);
        })
    } catch (error) {
        console.log(error);
    }
}