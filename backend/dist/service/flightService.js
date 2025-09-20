"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flightService = void 0;
const dbMethods_1 = require("../db/dbMethods");
class flightService {
    method;
    constructor() {
        this.method = new dbMethods_1.DbMethods;
    }
    /**
     * getAllFlights
     */
    getAllFlights() {
        return this.method.findAll();
    }
    /**
     * getFlightById
     */
    getFlightById(id) {
        const flight = this.method.findById(id);
        if (!flight) {
            throw new Error(`O id ${id} não foi encontrado na base de dados!`); // Possível chamada para um middleware
        }
    }
}
exports.flightService = flightService;
//# sourceMappingURL=flightService.js.map