import express from "express";
import { Server } from "socket.io"; 
import { createServer } from "http";
 

const port = 3000;

const app = express();
const server = createServer(app);

const io = new Server(server, {
    cors:{
        origin: "*",
        methods:["GET", "POST"],
        credentials: true,
    },  
});

app.get("/", (req, res) => {
    res.send("Hello World");
});


io.on("Connection", (socket) => {
    console.log("User Connected");
    console.log("Id", socket.id);
    
});

server.listen(3000, () => {

    console.log(`Server is running on ${port}`);
    
 });