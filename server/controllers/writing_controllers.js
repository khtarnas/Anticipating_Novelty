/**
 * writing.js file: the router for writings. Defines all routes that have to do
 *   with writings and connects them with their respective views. Finally
 *   exports the router to be used in server.js.
 * 
 * Exists in the /routes directory. 
 */

const express = require('express');
const path = require('path');

const router = express();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/writing/writing_index.html'))
  });

module.exports = router;