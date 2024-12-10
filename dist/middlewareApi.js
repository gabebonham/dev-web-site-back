"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthController_1 = require("./admin/controllers/AuthController");
const middleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield req.cookies['session'];
    console.log(session);
    if (yield (0, AuthController_1.authenticateController)(session)) {
        next();
    }
    else {
        res.sendStatus(403);
    }
});
exports.default = middleware;
