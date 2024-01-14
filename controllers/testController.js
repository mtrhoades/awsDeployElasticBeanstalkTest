const tests = require("express").Router(); 

tests.get('/', async (req, res) => {
    try {
        res.render("testGetRoutePage", {
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = tests;