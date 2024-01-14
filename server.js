// dependencies
const express = require('express');
const cors = require('cors');

// configuration
require('dotenv').config();
const PORT = process.env.PORT || 3007;
const app = express();

// middleware
app.set('views', __dirname + '/views');
app.use(express.static('public')); // access to public folder for css and images.
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// root route 
app.get('/', (req, res) => {
    res.send("What is up my duuuuude!");
    // res.render('testGetRoutePage')
});

// controllers
app.use('/tests', require('./controllers/testController'));

// server listen
app.listen(PORT, () => {
    console.log("Yea Dawg we up in here on Port", PORT)
});        
