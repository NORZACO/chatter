require("dotenv").config();
const express = require("express");
const app = express();
const server = require("http").createServer(app);
app.use(express.static(__dirname + "/public"));
const port = process.env.PORT || "3000";

//socket.io
const io = require("socket.io")(server);

server.listen(3000, () => {
  return console.log(`server running...on port http://127.0.0.1/${port}`);
});

//send file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//connecting
io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("message", (msg) => {
    console.log("Message received: ", msg);
    io.emit(`message`, msg);
  });

//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });

//   socket.on("typing", (data) => {
//     socket.broadcast.emit("typing", data);
//   });

//   socket.on("stopTyping", () => {
//     socket.broadcast.emit("stopTyping");
//   });
});

//
