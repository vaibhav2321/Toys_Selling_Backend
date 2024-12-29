const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL,{
            useUnifiedTopology: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error){
        console.log(`ERROR: ${error}`);
        process.exit(1);
        
    }
}
module.exports = connectDB;