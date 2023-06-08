import express from "express";
import morgan from "morgan";
import cors from "cors";

// Basic server structure just for the POST API
const app = express();

// Middlewares
// ---JSON parsing middleware
app.use(express.json());
// ---Logging----
app.use(morgan("dev"));

// CORS manipulation middleware
app.use(cors());
// ---Export---
export default app;
