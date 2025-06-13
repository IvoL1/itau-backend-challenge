import { Router } from "express";
import estatisticaController from "../controllers/estatistica.controller";

export const estatisticaRouter = Router();

estatisticaRouter.get("/", estatisticaController.index);
