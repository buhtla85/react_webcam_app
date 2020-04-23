import * as mongoose from "mongoose";
import { mongoURI } from "./sensitive";

const db = mongoURI;

export const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected...")
    } catch (error) {
        console.error(error.message);
    }
};

