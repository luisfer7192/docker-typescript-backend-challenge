import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";

import sprocketsRoutes from "./routes/sprocketsRoutes";
import factoriesRoutes from "./routes/factoriesRoutes";

const app: Application = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

// Just a HI!, we can remove this
app.get("/", (req, res) => {
  res.send("Hello, welcome to my app!");
});

// Routes
app.use("/api/sprockets", sprocketsRoutes);
app.use("/api/factories", factoriesRoutes);

// Start server
const PORT = process.env.PORT || 8082; // You can add any PORT you want as default
app.listen(PORT, () => {
  console.log(`Server started and listening on port ${PORT}`);
});
