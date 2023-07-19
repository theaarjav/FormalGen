const mongoose  = require("mongoose")
require("dotenv").config({path:'../.env'});

const connectDB=async()=>{
    try {
        const cncn=await mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser:true, useUnifiedTopology:true});
        console.log(`DB Connected ${cncn.connection.port}`)
    } catch (error) {
        console.log(`err: ${error.message}`);
        process.exit();
    }
}

module.exports=connectDB;