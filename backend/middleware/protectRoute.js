import jwt from 'jsonwebtoken';
import { User } from '../model/usermodel.js';

const protectRoute = async (req,res,next)=>{
 try {
    const token= req.cookies.jwt;
    if(!token)
    {
        return res.status(500).json({error:"Unauthorised"});
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    if(!decoded)
    {
        return res.status(500).json({error:"Unauthorised"});
    }
    // console.log(token);
    // console.log(decoded);
    const user= await User.findById(decoded.userId).select("-Password");
    // console.log(user);
    if(!user)
    {
        console.log("user not found in protected routes after  password removal ");
        return res.status(400).json({error:"user not found "});
    }
    req.user=user;
    next();

 } catch (error) {
    // console.log(Id);
    console.log("Protected route middleware error catch: ",error.message);
    return res.status(400).json({error:"Login First"});
 }
};

export default protectRoute;