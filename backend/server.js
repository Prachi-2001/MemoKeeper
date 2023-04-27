
const express = require('express');
const memories = require('./data/memories.js');
const dotenv = require("dotenv")
// In this above way we import modules in file

const app = express();
dotenv.config();

app.get('/', (req,res) => {
    res.send('API is running')
})

app.get('/api/memories', (req,res)=>{
    res.json(memories)
})

const PORT = process.env.PORT || 5000

// app.get('/api/memories/:id',(req, res)=>{
//     const memory = memories.find((n)=>n.id === req.params.id);
//     res.json(memory)
//     console.log(req.params)
// })

app.get("/api/memories/:id", (req, res)=>{
    const memory = memories.find((n)=> n.id == req.params.id);
    return res.send(memory);
})

app.listen(5000, console.log('server started on port 5000'));
