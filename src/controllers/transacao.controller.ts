import { Request, Response } from "express";
import { TransactionInput } from "../models/transacao.model";
import {
  addTransaction,
  listTransaction,
  removeTransaction,
} from "../repository/transaction.repository";
import { AppError } from "../utils/AppError";

class transacaoController {
  async create(req: Request, res: Response) {
    const { value, dateTime }: TransactionInput = req.body;
    addTransaction({ value, dateTime });
    res.status(201).json({ status: "success", message: "Transaction successfully created." });
  }

  async index(req: Request, res: Response) {
    res.status(200).json(listTransaction());
  }

  async remove(req: Request, res: Response) {
    try {
      await removeTransaction();
      res
        .status(200)
        .json({ status: "success", message: "All transactions successfully removed.." });
    } catch (err) {
      new AppError("error removing transaction", 500);
    }
  }
}

export default new transacaoController();
