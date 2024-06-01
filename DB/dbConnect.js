import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECT, {
      dbName: "Chat_App",
    });
    console.log("DB connected successfully");
  } catch (error) {
    console.log(error);
  }
};
export default dbConnect;
