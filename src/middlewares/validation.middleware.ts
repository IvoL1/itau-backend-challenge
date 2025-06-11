import { Request, Response, NextFunction } from "express";
import { TransactionInput } from "../models/transacao.model";
import { AppError } from "../utils/AppError";

export function validationMiddleware(req: Request, _: Response, next: NextFunction) {
  const { value, dateTime } = req.body as TransactionInput;

  const ms = Date.parse(dateTime);
  const now = Date.now();

  if (typeof value !== "number" || value < 0) {
    throw new AppError("Value must be a valid number", 422);
  }

  if (isNaN(ms) || ms > now) {
    throw new AppError("Invalid or future date not allowed", 422);
  }

  next();
}
