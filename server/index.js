const express = require('express')
const mongoose = require('mongoose')
//
// const http = require('http')
// const cors = require('cors')
// require("dotenv").config();

const bodyParser = require("body-parser")

const authRouter = require('./routers/authRouter')
const objRouter = require('./routers/objRouter')
const taskRouter = require('./routers/taskRouter')
const doneTaskRouter = require('./routers/doneTaskRouter')
const meetingRouter = require('./routers/meetingRouter')
const groupRouter = require('./routers/groupRouter')

const PORT = 5000

const app = express()

app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/object", objRouter)
app.use("/api/task", taskRouter)
app.use("/api/donetask", doneTaskRouter)
app.use("/api/meeting", meetingRouter)
app.use("/api/group", groupRouter)

// app.use(cors())
// const server = http.createServer(app)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const start = async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1/hahaton`)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))


        const WebSocket = require('ws');
        const ws = new WebSocket.Server({ port: 8080 });

        const socket = new WebSocket('ws://localhost:8080');
        socket.addEventListener('open', (event) => {
            socket.send('Hello Server!');
        });

        socket.addEventListener('message', (event) => {
            console.log('Message from server ', event.data);
        });

        socket.addEventListener('close', (event) => {
            console.log('The connection has been closed');
        });

        ws.on('connection', (wsConnection) => {
            wsConnection.on('message', (message) => {
                console.log(`server received: ${message}`);
            });

            wsConnection.send('got your message!');


        });

    } catch (e) {
        console.log(e)
    }
}

start()

