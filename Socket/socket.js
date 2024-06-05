import { Server } from "socket.io";
import express from "express";
import http from "http";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://conn-action-dashboard.netlify.app",
    methods: "*",
    allowedHeaders: ["Content-Type", "Authorization"],
  },
});
// https://chat-app-backend-hhmx.onrender.com/
export const getReceiverSocketId = (receiverId) => {
  return userSocketmap[receiverId];
};
const userSocketmap = {};
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;

  if (userId !== "undefined") userSocketmap[userId] = socket.id;
  io.emit("getOnlineUsers", Object.keys(userSocketmap));

  socket.on("disconnect", () => {
    delete userSocketmap[userId],
      io.emit("getOnlineUsers", Object.keys(userSocketmap));
  });
});

export { server, app, io };
