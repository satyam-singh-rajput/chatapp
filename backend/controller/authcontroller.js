import { User } from "../model/usermodel.js";
import bcrypt from 'bcryptjs';
import generatecookieandsettoken from "../utils/generateToken.js";

export const login = async  (req, res) => {
    try {
        const {Username,Password}=req.body;
        const user = await User.findOne({Username});
        if(!user)
        {
            return res.status(401).json({error:"Profile Not found"});
        }
        else
        {
            const isPassword=await bcrypt.compare(Password,user.Password);
            if(!isPassword)
            {
                return res.status(401).json({error:"Password does not matches"});
            }
            else{
                generatecookieandsettoken(user._id,res);
                return res.status(200).json({
                    _id:user._id,
                    Username:user.Username,
                    Fullname:user.Fullname,
                    Gender:user.Gender
                })
            }
        }
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({error:"An error Occured"});
    }
};

export const signup = async (req, res) => {
    try {
        const { Fullname, Username, Password, confirmPassword, Gender } = req.body;
        if (Password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        const existingUser = await User.findOne({ Username });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(Password, 10);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${Username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${Username}`;

        const newUser = new User({
            Fullname,
            Username,
            Password: hashedPassword,
            Gender,
            Profilepic: Gender === "male" ? boyProfilePic : girlProfilePic
        });
        if(newUser)
        {
            generatecookieandsettoken(newUser._id,res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                Fullname: newUser.Fullname,
                Username: newUser.Username,
                Profilepic: newUser.Profilepic
            });
        }
        else{
            return res.status(401).json({error:"Invalid User data"});
        }
    } catch (error) {
        console.error("Error in auth controller for signup", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt","",{maxAge: 0});
        res.status(400).json({message:"Logged Out Succesfully"});
    } catch (error) {
        console.log(error);
        res.status(400).json({error:"An Error occured"});
    }
};
