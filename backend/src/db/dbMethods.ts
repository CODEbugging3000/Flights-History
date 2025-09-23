import { getFlights } from "./dataSource";
import { Flight } from "../types/flight";

export class DbMethods {
  // Paginação com padrão de 5 jsons por vez
  findAll(offset: number, limit: number): [Flight[], number] {
    if (getFlights()) {
      return [getFlights().slice(offset, limit), getFlights().length];
    }
    return [[], 0]
  }

  findById(id: string): Flight | undefined {
    return getFlights().find((flight) => flight.id === id);
  }
}