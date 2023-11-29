const express = require('express')
const APP = express()
const PORT = 3000

APP.get('/', (req, res) => {
  res.send('Hello World!')
});

APP.listen(PORT, () => {
  console.log(`Example app listening on port ${port}`)
});

