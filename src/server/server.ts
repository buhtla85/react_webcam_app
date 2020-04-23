import * as express from 'express';
import router from './routes';
import * as path from "path";

const app = express();

app.use(express.static('public'));
app.use(express.json()); //parses incoming requests with JSON payloads and is based on body-parser. More info: https://expressjs.com/en/4x/api.html#express.json
app.use(express.urlencoded({extended: false})); //parses incoming requests with urlencoded payloads and is based on body-parser. More info: https://expressjs.com/en/4x/api.html#express.json

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
