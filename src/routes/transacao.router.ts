import { Router } from "express";
import transacaoController from "../controllers/transacao.controller";
import { validationMiddleware } from "../middlewares/validation.middleware";

export const transacaoRouter = Router();

transacaoRouter.post("/", validationMiddleware, transacaoController.create);

transacaoRouter.get("/", transacaoController.index);
