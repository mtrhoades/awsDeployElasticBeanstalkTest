// dependencies
const express = require('express');
// configuration
require('dotenv').config();
const PORT = process.env.PORT || 3007;
const app = express();

// root route 
app.get('/', (req, res) => {
    res.send("Welcome to the home page duuuuude!");
});

// server listen
app.listen(PORT, () => {
    console.log("Yea Dawg we up in here on Port", PORT)
});        
