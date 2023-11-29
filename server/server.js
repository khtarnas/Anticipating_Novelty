/**
 * server.js file: the entry point for this project. Manner of calling defined
 *  in package.json under scripts. Imports all routes and manages connection to
 *  views. 
 */

const express = require('express')
const path = require('path');

const WritingRouter = require('./routes/writing');

const app = express()
const PORT = 3001

app.get("/api", (req, res) => {
    res.json({ "sampleList" : ["Hello from server!", "item2", "item3"] });
});

/********* ROUTING *********/

// Use routes
app.use('/writing', WritingRouter);

// set the initial entry point
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});

