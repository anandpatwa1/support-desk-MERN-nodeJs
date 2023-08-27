const mongoose = require('mongoose')

const connectDB = async () => {
   try {
      const connect = await mongoose.connect(process.env.MONGO_URI)
      console.log('Database conected'.cyan);
   } catch (error) {
      console.log(`Error ; ${error.message}`);
   }
}
module.exports = { connectDB }