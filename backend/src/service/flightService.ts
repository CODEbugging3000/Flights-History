import { Flight } from "../types/flight";
import { DbMethods } from "../db/dbMethods";

export class flightService {
    private method: DbMethods;

    constructor() {
        this.method = new DbMethods 
    }

    /**
     * getAllFlights
     */
    public getAllFlights(offset: number, limit:  number): [Flight[], number] {
        return this.method.findAll(offset, limit);
    }

    /**
     * getFlightById
     */
    public getFlightById(id: string) {
        const flight = this.method.findById(id)
        if (!flight) {
            throw new Error(`O id ${id} não foi encontrado na base de dados!`) // Possível chamada para um middleware
        }
        return flight;
    }
}