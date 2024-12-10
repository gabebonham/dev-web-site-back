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
exports.loginController = loginController;
exports.authenticateController = authenticateController;
const AuthService_1 = require("../services/AuthService");
function loginController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.body;
        const session = yield (0, AuthService_1.login)(user);
        const j = JSON.stringify({ session: session });
        console.log(j);
        if (session) {
            res.send(j);
        }
        else {
            res.sendStatus(403);
        }
    });
}
function authenticateController(session) {
    return __awaiter(this, void 0, void 0, function* () {
        const auth = yield (0, AuthService_1.authenticate)(session);
        if (auth) {
            return session;
        }
        else {
            return null;
        }
    });
}
