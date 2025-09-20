import { Router } from "express";
import { HistoryController } from "../controllers/historyController";

const router = Router();

router.get('/flights', HistoryController.getAll);

router.get('/flights/:id', HistoryController.getById);

export default router;