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
const extensionRouter = require('./routes/extensionRoutes');
const chatGRouter = require('./routes/chatGRoutes');

app.use('/file', fileRouter);
app.use('/user', userRouter);
app.use('/group', groupRouter);
app.use('/ext', extensionRouter);
app.use('/chat', chatGRouter);

const httpServer = app.listen(port, () => {console.log(`Server listening on port ${port}`)});

const { Server } = require("socket.io");
const io = new Server(httpServer, {
    cors : {
        origin: "*",
        methods:["GET", "POST"]
    }
} );

io.on("connection", (socket) => {
    let currentRoom = "";

    socket.on("groupName", msg => {
        socket.join(msg.id + "")
        currentRoom = msg.id
    })

    socket.on("text-change", newText => {
        io.to(currentRoom).emit( "text-change", {text:newText, emitter:socket.id})
    })

    socket.on("message", message => {
        io.to(currentRoom).emit("message", message);
    })

})
