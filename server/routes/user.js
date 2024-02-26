import express from 'express';
import pool from '../helpers/database.js';
const router = express.Router();

router.get('/', async function(req, res){
try {
    const queue = 'SELECT * FROM test.car;';
    const rows = await pool.query(queue);

    res.status(200).json(rows);
} catch (error) {
    res.status(400).send(error)
}

    // res.status(200).json({id: req.params.id})
})

export default router;