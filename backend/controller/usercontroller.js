import { User } from "../model/usermodel.js";

export const getUsersForSidebar = async(req,res)=>{
    try {
        const loggedInUserId=req.user._id;
        const filteredUsers = await User.find({_id:{$ne :loggedInUserId}}).select("-Password")//find users by id not equal to my owon id (ne)
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("error in getuserforsidebar function ", error);
        return res.status(400).json("Internal server error ");
    }
};