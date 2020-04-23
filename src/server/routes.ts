import * as express from 'express';

const router = express.Router();

interface ReqBodyValues {
    mood: string,
    imgSrc: string
}

//get all photos from db and display them on the photos page
router.get('/photos', (req, res) => {
    res.send("Get all entries.");
});

//delete a particular entry from db
router.delete("/photos/:id", (req, res) => {
    res.send("Delete a single entry");
});

//create a new entry on home page (inputssection component)
router.post("/", (req, res) => {
    res.send("New entry created");
    console.log("I got a request!");
    console.log(req.body);
});

export default router;