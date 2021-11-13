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
app.use(express.urlencoded({ extended:true }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true});

const connection = mongoose.connection;
connection.once('open', () => console.log('Connected'));

const fileRouter = require('./routes/fileRoutes');
const userRouter = require('./routes/userRoutes');
const groupRouter = require('./routes/groupRoutes');

app.use('/file', fileRouter);
app.use('/user', userRouter);
app.use('/group', groupRouter);

app.listen(port, () => {console.log(`Server listening on port ${port}`)});

//https://www.youtube.com/watch?v=hKYjSgyCd60