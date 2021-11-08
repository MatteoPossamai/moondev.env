const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.port || 5050;

app.use(morgan('dev'));

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true});

const connection = mongoose.connection;
connection.once('open', () => console.log('Connected'));

app.listen(port, () => {console.log(`Server listening on port ${port}`)});

//nodemon server

//use cookies to store a live session

//https://www.youtube.com/watch?v=hKYjSgyCd60