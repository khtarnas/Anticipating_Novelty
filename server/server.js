/**
 * server.js file: the entry point for this project. Manner of calling defined
 *  in package.json under scripts. Imports all routes and manages connection to
 *  views. 
 */

const express = require('express')
const mongoose = require('mongoose');

const WritingController = require('./controllers/writing_controllers');

const app = express()
const PORT = 3001

/********* Database *********/
const URI = 'mongodb://127.0.0.1:27017/';
console.log("hello");

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected!'));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('Connected successfully!');
});

/********* ROUTING *********/

// Route to controllers
app.use('/writing', WritingController);

// TEMP SHIT
app.get('/', (req, res) => {
    res.send("TEMPPPPPP");
});

app.get("/api", (req, res) => {
    res.json({ "sampleList" : ["Hello from server!", "item2", "item3"] });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});

