import * as express from 'express';
import { mySchema } from "./db/PhotoModel";

const router = express.Router();

interface ReqBodyValues {
    mood: string,
    imgSrc: string
}

//get all entries from the DB (and later show them on the http://localhost:3000/photos page)
router.get('/photos', async (req, res) => {
    try {
        const photos = await mySchema.find();
        return res.status(200).json({
            success: true,
            count: photos.length,
            data: photos
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            errorMsg: "Server Error."
        });
    } 
});

//delete a particular entry from the DB
router.delete("/photos/:id", (req, res) => {
    res.send("Delete a single entry");
});

//create a new entry on home page (inputssection component)
router.post("/", async (req, res) => {
    try {
        //const { mood, imgSrc } = req.body;
        const dbEntry = await mySchema.create(req.body);
        //await dbEntry.save();
        return res.status(201).json({
            success: true,
            data: dbEntry
        }); // res.send - led to an error when user submitted the form (JSON parse, unexcpected character...)
    } catch (err) {
        if (err.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                errorMsg: "Invalid client input"
            })
        } else {
            return res.status(500).json({
                success: false,
                errorMsg: "Server Error."
            }); 
        }
    }
});

export default router;