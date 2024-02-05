// src/app.ts
import express, { Request, Response } from "express";
import loginRouter from "./routers/loginRouter";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;

app.use("/api/login", loginRouter);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
