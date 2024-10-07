const mongoose = require("mongoose");

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connected to database');

    } catch (error) {
          throw new Error('not connected to database');

    }
 


}


module.exports = {
    connectDB
}