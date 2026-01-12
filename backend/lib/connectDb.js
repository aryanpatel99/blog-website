const mongoose = require("mongoose")

const connectDb = async ()=>{
    try {
        mongoose.connection.on("connected",()=>{
            console.log("Connected to MongoDB");
        })    
    
        await mongoose.connect(`${process.env.MONGO_URL}/blog`)
    } catch (error) {
        console.log(error);
    }
   
}

module.exports = {connectDb}