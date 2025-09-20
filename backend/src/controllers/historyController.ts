import type { Request, Response } from "express";
import { flightService } from "../service/flightService";

const service = new flightService();
export class HistoryController {
  static getAll(req: Request, res: Response) {
    try {
      const flights = service.getAllFlights();
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
