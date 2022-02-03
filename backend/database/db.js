const mongoose = require("mongoose");
exports.connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CLOUD_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB...");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
