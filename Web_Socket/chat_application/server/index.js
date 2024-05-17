import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

let app = express();
let port = 3000;
let server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

let io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})

io.on("connection" ,(socket) =>{
    console.log(socket.id);
    socket.on("send_message",(data) =>{
        console.log(data);
        socket.broadcast.emit("receive_message" ,data)
    })
})
server.listen(port, () => {
    console.log(`Server is running on port number`, port);
})

