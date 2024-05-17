import express from "express";
const app = express();
let port = 3000;
import {WebSocketServer} from "ws"

let server =  app.listen(port ,() =>{
    console.log("Server is Running...",port);
})

let wss = new WebSocketServer({server});

wss.on("connection" ,(ws) =>{
    ws.on("message",(data) =>{
        console.log("data is %s" , data);
        ws.send("Thanks");
    })
})