import mongoose from "mongoose";
import { DB_NAME } from "../constants.mjs";

async function connectDB() {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB ERROR ", error);
        process.exit(1);

    }
}

export default connectDB;