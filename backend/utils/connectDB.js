import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connection Done");
    } catch (err) {
        console.log("DB connection Error", err);

    }
}

export default connectDB;