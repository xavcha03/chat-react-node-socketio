const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors()); // Add cors middleware

const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: "http://localhost:5173",
		methods: ["GET", "POST"],
	},
});

const CHAT_BOT = "ChatBot";

let chatRoom = "";
let allSUers = [];

io.on("connection", (socket) => {
	console.log(socket.id);
});

app.get("/", (req, res) => {
	res.send("hello world");
});

server.listen(4000, () => "Server is running on port 4000");