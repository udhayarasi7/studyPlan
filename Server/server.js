import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
dotenv.config();
import authRoutes from './routes/authRoutes.js';
import studyPlanRoutes from './routes/studyPlanRoutes.js';
//console.log("MONGODB_URL:", process.env.MONGODB_URL);
import {connectDB} from './config/db.js';
connectDB();

//controllers and routes import statements would go here
//to see the backend server is running

 const app = express();
 app.use(cors({"origin": "*"}));
 app.use(express.json());
 app.use(`/api`, authRoutes);
 app.use(`/api`, studyPlanRoutes);

 app.listen(process.env.PORT, () => {
   console.log(`Server is running on port ${process.env.PORT}`);
 });
