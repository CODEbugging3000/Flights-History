"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryController = void 0;
const flightService_1 = require("../service/flightService");
const service = new flightService_1.flightService();
class HistoryController {
    static getAll(req, res) {
        return service.getAllFlights();
    }
    static getById(req, res) {
        try {
            const id = req.params.id;
            if (id) {
                const flight = service.getFlightById(id.toString());
                res.json(flight);
            }
        }
        catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}
exports.HistoryController = HistoryController;
//# sourceMappingURL=historyController.js.map