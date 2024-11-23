const mongoose = require("mongoose")

const DB = process.env.DATABASE 

mongoose.connect(DB);

const connectDB=async()=>{
    try{
        let conn= await mongoose.connect(DB);
        console.log(`connected to database ${conn.connect.host}`)
    }
    catch (error){
        console.log("error while connecting database", error)
    }
}

module.exports = connectDB;