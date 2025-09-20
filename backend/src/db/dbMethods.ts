import { getFlights } from "./dataSource";
import { Flight } from "../types/flight";

export class DbMethods {
    findAll(): Flight[]{
        return getFlights();
    }

    findById(id: string): Flight | undefined {
        return getFlights().find(flight => flight.id === id);
    }
}