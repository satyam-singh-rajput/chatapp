import { Server } from 'socket.io';
import http from 'http';
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ['GET', 'POST']
    }
});

const userSocketMap = {};

export const getRecieverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};

io.on('connection', (socket) => {
    const userID = socket.handshake.query.userId;
    if (userID) {
        userSocketMap[userID] = socket.id;
    }
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        if (userID) {
            delete userSocketMap[userID];
        }
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { app, server };
