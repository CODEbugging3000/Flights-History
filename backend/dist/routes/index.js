"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const historyController_1 = require("../controllers/historyController");
const router = (0, express_1.Router)();
router.get('/flights', historyController_1.HistoryController.getAll);
router.get('/flights/:id', historyController_1.HistoryController.getById);
exports.default = router;
//# sourceMappingURL=index.js.map