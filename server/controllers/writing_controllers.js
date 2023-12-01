/**
 * writing.js file: the router for writings. Defines all routes that have to do
 *   with writings and connects them with their respective views. Finally
 *   exports the router to be used in server.js.
 * 
 * Exists in the /routes directory. 
 */

const express = require('express');

// Import model:
const Writing = require("../models/writing_model.js");

// Set up router:
const router = express();
router.use(express.json());
router.use(
  express.urlencoded({
    extended: true,
  }),
);

/****** Routes: ******/
router.post('/add', async (req, res, next) => {
  const {
    title, desc, text
  } = req.body;

  try {
    await Writing.create({
      title, desc, text
    });
    res.send('event created');
    
  } catch (err) {
    next(err);
  }
});

module.exports = router;