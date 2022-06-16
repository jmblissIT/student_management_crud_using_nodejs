import express from 'express';
import connectDB from './db/connectdb.js';
import web from './routes/web.js';
const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

//Database Connection
connectDB(DATABASE_URL);

app.use(express.urlencoded({extended:false}))

//Set Template Engine which are using in this project
app.set('view engine', 'ejs');

//Static Files included from public folder
app.use('/student',express.static('public'));
app.use('/student/edit',express.static('public'));

//Load Routes
app.use('/student', web);

app.listen(port, ()=> {
    console.log(`Server listening at http://localhost:${port}`)
});