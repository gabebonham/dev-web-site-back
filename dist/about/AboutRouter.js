"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AboutController_1 = require("./controllers/AboutController");
const router = (0, express_1.Router)();
router.get('', AboutController_1.getAboutController);
router.put('', AboutController_1.updateAboutController);
exports.default = router;
