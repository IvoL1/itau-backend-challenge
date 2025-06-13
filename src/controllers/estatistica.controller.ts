import { Request, Response } from "express";
import { statistics } from "../repository/transaction.repository";

class estatisticaController {
  async index(req: Request, res: Response) {
    res.status(200).json(statistics());
  }
}

export default new estatisticaController();
