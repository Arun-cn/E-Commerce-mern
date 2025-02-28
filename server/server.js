import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRouters from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRouttes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
//rest object
const app = express();
//config database

connectDB();
//es modeule fix

//middelwares
app.use(cors());

app.use(express.json());
app.use(morgan("dev"));

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// Serve static files from the React app
const buildPath = path.join(__dirname, "..", "client", "build");
app.use(express.static(buildPath));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get("/", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

//routers
app.use("/api/v1/auth", authRouters);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRouttes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("server started");
});
