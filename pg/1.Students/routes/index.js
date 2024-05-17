import express from "express"
const router = express();
import pool from "./../config/db.js";


router.post('/', async (req, res) => {
    let { name, email, password } = req.body;
    try {
        const data = await pool.query('SELECT * FROM students WHERE email = $1', [email]);
        console.log(data.rows);

        if (data.rows.length > 0) {
            return res.status(400).send('User with this email already exists');
        }

        const result = await pool.query(
            'INSERT INTO students (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, password]
        );
        console.log(result.rows);
        res.send('User inserted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


router.get('/' , async(req ,res) =>{
    try {
        let {rows} = await pool.query('SELECT * FROM students');
        console.log(rows);
        res.json({data : rows})
    } catch (error) {
        console.log(error);
    }
})

router.get('/:userId' , async(req ,res) =>{
    const userId = req.params.userId;
    try {
        let {rows} = await pool.query('SELECT * FROM students WHERE id = $1',[userId]);
        console.log(rows);
        res.json({data : rows})
    } catch (error) {
        console.log(error);
    }
})

router.put('/:userId', async (req, res) => {
    const userId = req.params.userId;
    const { name, email, password } = req.body;
    try {
        // Execute the UPDATE query
        const result = await pool.query(
            'UPDATE students SET name = $1, email = $2, password = $3 WHERE id = $4',
            [name, email, password, userId]
        );
        console.log(result);
        res.send('User updated successfully');
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const result = await pool.query(
            'DELETE FROM students WHERE id = $1',
            [userId]
        );
        console.log(result);
        res.send('User deleted successfully');
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Internal Server Error');
    }
});


router.get('/' ,(req ,res) =>{
    try {
        const data = await pool.query('SELECT * FROM ')
        res.json({data})
    } catch (error) {
        console.log(error);
    }
})
export default router;