import { Router } from "express";
import { transacaoRouter } from "./transacao.router";

export const router = Router();

router.use("/transaction", transacaoRouter);
router.use("/estatistica");
