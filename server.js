require('dotenv').config({path: '.env'})
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
  return res.status(200).json({
    success: true
  })
});

mongoose.connect(process.env.MONGO_URL, (err) => console.log(err));

app.listen(3000, () => console.log('Server is running...'));