import express from 'express';
import formRoute from './routes/formRoute.js';
import {fileURLToPath} from 'url';
import path from 'path';

const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.set("views", path.join(__dirname, "views"));

app.use('/form', formRoute);

app.listen(7000, () => {
    console.log('server running at http://localhost:7000/');
})