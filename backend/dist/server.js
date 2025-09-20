"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config/config"));
const dataSource_1 = require("./db/dataSource");
app_1.default.listen(config_1.default.port, async () => {
    console.log(`API rodando em http://localhost${config_1.default.port}`);
    await (0, dataSource_1.loadFlightsData)();
});
//# sourceMappingURL=server.js.map