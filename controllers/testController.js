const tests = require("express").Router(); 
const Comment = require('../models/Comment');

tests.get('/', async (req, res) => {
    try {
        const result = await Comment.find();
        // console.log(result);
        res.render("testGetRoutePage", {
            comments: result
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = tests;