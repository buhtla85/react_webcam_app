import * as mongoose from "mongoose";

const PhotoSchema = new mongoose.Schema({
    imgSrc: {
        type: String,
        required: true
    },
    mood: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export const mySchema = mongoose.model("photoModel", PhotoSchema);