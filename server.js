import express  from "express";
import dotenv from 'dotenv'
import morgan from "morgan";
import connectDB from "./config/db.js"; 
import authRouters from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRouttes from './routes/productRoutes.js';
import cors from'cors';

dotenv.config();
//rest object
const app = express();
//config database

connectDB();
//middelwares
app.use(cors());

app.use(express.json());
app.use(morgan('dev'));

//routers
app.use('/api/v1/auth',authRouters);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRouttes);

app.get("/",(req,res)=>{
    res.send("<h1> welcome to e commerce web site <h1>"); 
});

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log("server started");
})