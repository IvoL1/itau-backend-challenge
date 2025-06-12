import { Request, Response } from "express";
import { TransactionInput } from "../models/transacao.model";
import { addTransaction, listTransaction } from "../repository/transaction.repository";

class transacaoController {
  async create(req: Request, res: Response) {
    const { value, dateTime }: TransactionInput = req.body;
    addTransaction({ value, dateTime });
    res.status(201).json({ status: "success", message: "Transaction successfully created." });
  }

  async index(req: Request, res: Response) {
    res.status(200).json(listTransaction());
  }
}

export default new transacaoController();
