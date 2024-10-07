const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const { connectDB } = require('./config/db');


const app = express();

app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 5000;

connectDB();

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})
