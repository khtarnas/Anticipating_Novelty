/**
 * Controller file for writings: Defines all routes that have to do
 *  with writings and their database operations. Routes are referenced
 *  by the handler file (writing_handler.js)
 * 
 * Exists in the /server/controllers
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

router.get('/getAll', async (req, res, next) => {
  try {
    await Writing.find({}).then(function (writings) {
      res.send(writings);
    });

  } catch (err) {
    next(err);
  }
})

module.exports = router;