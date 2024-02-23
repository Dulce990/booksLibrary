import express from 'express';
import { config } from 'dotenv';
import recipeRouter from './routes/reciperoutes.js'
config();
const app = express();
//settings

app.set('view engine', 'ejs')


//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/book', recipeRouter)

export default app;