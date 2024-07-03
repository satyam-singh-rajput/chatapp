import Conversation from "../model/conversationmodel.js";
import Message from "../model/messagemodel.js";
import { getRecieverSocketId } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;  // Assuming the sender's ID is available in req.user

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
             senderId,
             receiverId,
             message
        });
        // console.log(newMessage);
        if(newMessage)
        {
            conversation.messages.push(newMessage._id); // Assuming `messages` is the field name in the conversation model
        }

        await Promise.all([conversation.save(),newMessage.save()]);//this will run in parallel so very fast 
        const recieverSocketId=getRecieverSocketId(receiverId);
        console.log("error here  or not ",recieverSocketId);
        if(recieverSocketId){
            //io.to(<>socketid).emit() is used to sebd events to some specific clients
            io.to(recieverSocketId).emit("new Message ", newMessage);
        }
        res.status(201).json(newMessage);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server error" });
    }
};

export const getMessages=async(req,res)=>{
  try {
    const {id:userToChatId}=req.params;
    const senderId=req.user._id;
    const conversation=await Conversation.findOne({
        participants:{$all: [senderId,userToChatId]},
    }).populate("messages")//not reference ids but  actual messages
    if(!conversation)
    {
        return res.status(200).json("No conversation");
    }
    const messages=conversation.messages;
    return res.status(200).json(messages);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({error:'Internal server Issue'});
  }
};
// export default sendMessage;
