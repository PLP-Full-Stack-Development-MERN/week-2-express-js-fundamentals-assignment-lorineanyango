import express, { response } from 'express';
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.mjs';
import productRoutes from './routes/productRoutes.mjs'
import { loggerMiddlware } from './middleware/logger.mjs';
import errorHandler from './middleware/errorHandling.mjs';

dotenv.config();// this will help to acess the .env variables eg port

const app = express();
app.use(express.json());
app.use(loggerMiddlware);
app.use(userRoutes);
app.use(productRoutes);
app.use(errorHandler);


const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=>{
  console.log("Server is running on port 3000......")
})