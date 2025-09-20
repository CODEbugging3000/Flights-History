"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbMethods = void 0;
const dataSource_1 = require("./dataSource");
class DbMethods {
    findAll() {
        return (0, dataSource_1.getFlights)();
    }
    findById(id) {
        return (0, dataSource_1.getFlights)().find(flight => flight.id === id);
    }
}
exports.DbMethods = DbMethods;
//# sourceMappingURL=dbMethods.js.map