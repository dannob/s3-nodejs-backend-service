
require('dotenv').config();
const express = require('express');
const s3Handler = require('./s3Handler');

const app = express();
app.use(express.json());

// Define your API routes here

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
