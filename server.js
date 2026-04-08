import express from 'express';
import colors from 'colors';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv'
const app = express();


dotenv.config({path:'./'})

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    return res.status(200).send("<h1>Welcome to food Server API</h1>")
})

const PORT = 8080

app.listen(PORT, () => {
    console.log("Node Server Running".bgGreen.white)
})