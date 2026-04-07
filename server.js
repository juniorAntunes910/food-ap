import express from 'express'

const app = express()

app.get('/',(req,res) => {
    return res.status(200).send("<h1>Welcome to food Server </h1>")
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log("Server Running")
})