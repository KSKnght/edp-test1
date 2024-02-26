import express, { query } from 'express'
import mariadb from 'mariadb'
import cors from 'cors'
import userRouter from './routes/user.js'
import pool from './helpers/database.js';

const PORT = process.env.PORT || '8081';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());


app.get('/user', (req, res) => {
    res.status(200).send("hallo!!")
});

app.get('/', userRouter);

app.post('/car', async function(req, res) {
    const values = [
        req.body.brand,
        req.body.model,
        req.body.price
    ]

    try {

        const queue = "INSERT INTO test.car (brand, model, price) values ('"+ values[0] +"', '" + values[1] + "', '" + values[2] + "');";

        await pool.query(queue);
    
        res.status(200).json({Message: "added!"});
    } catch (error) {
        res.status(400).send(error)
    }
});

app.get('/read/:id', async function(req, res) {
    const id = req.params.id
    try {
        const queue = 'SELECT * FROM test.car WHERE id =' + id + ';';
        const row = await pool.query(queue);

        res.status(200).json(row);
    } catch (error) {
        res.status(400).send(error)
    }
});

app.put('/edit/:id', async function(req, res) {
    const id = req.params.id
    try {
        const queue = "UPDATE test.car SET brand='"+ req.body.brand +"', price='"+ req.body.price +"', model='"+ req.body.model +"' WHERE id=" + id + ";";
        await pool.query(queue);
    } catch (error) {
        res.status(400).send(error)
    }
});

app.delete('/d/:id', async function(req, res) {
    const id = req.params.id
    try {
        const queue = "DELETE FROM test.car WHERE id=" + id + ";";
        await pool.query(queue);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
})