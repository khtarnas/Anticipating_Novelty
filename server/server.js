/**
 * server.js file: the entry point for this project (on the server side). Manner of
 *  calling defined in package.json under scripts. Imports all routes and manages
 *  connection to views. 
 */

const express = require('express')
const mongoose = require('mongoose');

const WritingController = require('./controllers/writing_controllers');

const app = express()
const PORT = 3001

/********* Database *********/
mongoose.set("strictQuery", false);
const URI = "mongodb+srv://khtarnas:anticipatingnovelty@cluster0.hu8pd4t.mongodb.net/?retryWrites=true&w=majority";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(URI);
}

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

