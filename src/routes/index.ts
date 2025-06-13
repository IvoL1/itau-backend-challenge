import { Router } from "express";
import { transacaoRouter } from "./transacao.router";
import { estatisticaRouter } from "./estatistica.router";

export const router = Router();

router.use("/transaction", transacaoRouter);
router.use("/statistics", estatisticaRouter);
