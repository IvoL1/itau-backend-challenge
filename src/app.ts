import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";
import { AppError } from "./utils/AppError";

const app = express();
const port = 3333;

app.use(express.json());

app.use(router);

app.use((err: AppError, req: Request, res: Response, _: NextFunction) => {
  res.status(err.statusCode).json({
    method: req.method,
    statusCode: err.statusCode,
    message: err.message,
  });
});

app.listen(port, () => console.log(`Server running on port: http://localhost:${port}`));
