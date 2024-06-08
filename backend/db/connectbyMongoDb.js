import mongoose from "mongoose";
const connnecToMongoDb= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("connected to mongodb");
    }
    catch(error){
        console.log("error in connecting mongodb",error.message);
    }
};

export default connnecToMongoDb;