import express  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config();

import { PostApiV1Signup , PostApiV1Login , GetApiV1Users } from "./controlers/user.js";

const app = express()
app.use(express.json)

const connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGOODB_URL) ;
    if(conn){
        console.log("MongooDB connected❤️ ");
    }
}
connectDB();

app.post('/api/v1/signup' ,  PostApiV1Signup)
app.post('/api/v1/login' , PostApiV1Login)
app.get("/api/v1/users" , GetApiV1Users )

const PORT = process.env.PORT || 5000 ; 

app.listen(PORT , ()=>{
    console.log(`server runing on Port ${PORT}`)
})