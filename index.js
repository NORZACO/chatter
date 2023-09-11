const express = require("express");
const app = express();
const server = require("http").createServer(app);
const port = process.env.PORT || "3000";

server.listen(3000, () => {
  return console.log(`server running...on port ${port}`);
});

//send file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});



//socket.io
io.on("connection", (socket) => {
  console.log("a user connected :D");

  socket.emit("message", {
    message: "welcome to the chat",
  });

  socket.on("another event", (data) => {
    console.log(data);
  });
});
