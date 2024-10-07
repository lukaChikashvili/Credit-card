const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');


const app = express();

app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
    console.log(`server running on port ${port}`);
})
