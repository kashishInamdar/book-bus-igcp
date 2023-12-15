import express  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config();

const app = express()
app.use(express.json)

const connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGOODB_URL) ;
    if(conn){
        console.log("MongooDB connected❤️ ");
    }
}
connectDB();

const PORT = process.env.PORT || 5000 ; 

app.listen(PORT , ()=>{
    console.log(`server runing on Port ${PORT}`)
})