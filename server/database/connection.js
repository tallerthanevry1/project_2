const mongoose = require('mongoose');


const connectDB = async () => {
    try{
        // mongodb connection string
        const con = mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log(`MongoDB connected : ${con.connection.connectDB}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB