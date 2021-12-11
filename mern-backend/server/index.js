import bodyParser from 'body-parser';
import express from 'express';
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Routes
import posts from './routes/posts.js'

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PW = process.env.MONGODB_PW;
const CONNECTION_URL = `mongodb+srv://${MONGODB_USER}:${MONGODB_PW}@cluster0.cehxl.mongodb.net/<dbname>?retryWrites=true&w=majority`;

// Bodyparser Setup
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Cors Setup
app.use(cors());

// Routing
app.use('/posts', posts);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`)))
    .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);