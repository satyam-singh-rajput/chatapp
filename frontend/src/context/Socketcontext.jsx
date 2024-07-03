import { createContext, useContext, useEffect, useState } from "react";
import { useAuthcontext } from "./Authcontext";
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
    const [Socket, setSocket] = useState(null);
    const [onlineuser, setOnlineUsers] = useState([]);
    const { Authuser } = useAuthcontext();
    // console.log("auth user : ",Authuser);
    useEffect(() => {
        if (Authuser) {
            const socket = io("http://localhost:5000", {
                query: {
                    userId: Authuser._id
                }
            });
            setSocket(socket);
            // console.log("online above");
            // Listen for "getOnlineUsers" event from the serve
            socket.on("getOnlineUsers", (users) => {
                // console.log("get online user state functions check")
                // console.log("Received online users:", users);
                if(users){
                    // console.log("users checks : ",users);
                    setOnlineUsers(users); // Update onlineuser state with received data

                }
            });

            // Close socket connection when component unmounts or Authuser becomes null
            return () => {
                socket.close();
                setSocket(null);
            };
        } else {
            // Close socket connection if Authuser is null
            if (Socket) {
                Socket.close();
                setSocket(null);
            }
        }
    }, [Authuser]);

    // console.log("Socket:", Socket); // Log Socket after setting it
    // console.log("Online Users:", onlineuser); // Log onlineuser after setting it

    return (
        <SocketContext.Provider value={{ Socket, onlineuser }}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocketcontext = () => useContext(SocketContext);
