import type { Request, Response } from "express";
import { flightService } from "../service/flightService";

const service = new flightService();
export class HistoryController {
  static getAll(req: Request, res: Response) {
    try {
      const offset: number = parseInt(req.query.page as string) || 1;
      const limit: number = parseInt(req.query.limit as string) || 5; // Padrão de limite por requisição: 5

      const start = (offset - 1) * limit;
      const end = start + limit;

      const flights = service.getAllFlights(start, end);

      res.json(flights); // envia resposta
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static getById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      if (id) {
        const flight = service.getFlightById(id.toString());
        res.json(flight);
      }
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }
}
