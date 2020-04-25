import * as express from 'express';
import { mySchema } from "./db/PhotoModel";

const router = express.Router();

interface ReqBodyValues {
    mood: string,
    imgSrc: string
}

//get all photos from db and display them on the photos page
router.get('/photos', async (req, res) => {
    //res.send("Get all entries.");
    await mySchema.find({}, (err, photoModels) => {
        if (err) return console.error(err);
        //console.log(photoModels);
        //[{ _id: 5ea2ee1bca82181e0c71e83b, mood: 'happy', imgSrc: 'random letters', date: 2020-04-24T13:48:11.594Z, __v: 0 }]
        const flatPhotos = photoModels.map((photoModel) => {
            return photoModel.toObject();
        });
        res.send(JSON.stringify(flatPhotos)); 
    });
    //res.json(data);
    //res.send(JSON.parse(JSON.stringify(data)));
    
    
});

//delete a particular entry from db
router.delete("/photos/:id", (req, res) => {
    res.send("Delete a single entry");
});

//create a new entry on home page (inputssection component)
router.post("/", async (req, res) => {
    try {
        const { mood, imgSrc } = req.body;
        const dbEntry = new mySchema({ mood, imgSrc });
        await dbEntry.save();
        res.status(201).json({
            success: true,
            data: dbEntry
        }); // res.send - led to an error when user submitted the form (JSON parse, unexcpected character...)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error..")
    }
});

export default router;