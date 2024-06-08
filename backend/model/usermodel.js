import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Fullname: {
        type: String,
        required: true,
    },
    Username: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    Profilepic: {
        type: String,
        default: ""
    }
} ,{timestamps:true});

export const User = mongoose.model("User", userSchema);
