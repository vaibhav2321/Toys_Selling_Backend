// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Toys = require('./model/toys')

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send(`Server is running on Port: ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});

app.post('/api/toys', async(req,res)=>{
    
    try {
        const toys = req.body;
        const savedToy = await Toys.insertMany(toys);
        res.status(201).json(savedToy);
    } catch (error) {
        console.log(`ERROR: ${error}`);
        res.status(400).json({message: error.message})
        
    }
})
