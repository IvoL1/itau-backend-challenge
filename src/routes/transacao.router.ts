import { Router } from "express";
import transacaoController from "../controllers/transacao.controller";

export const transacaoRouter = Router();

transacaoRouter.post("/", transacaoController.create);
