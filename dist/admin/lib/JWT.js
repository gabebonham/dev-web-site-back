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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = decrypt;
exports.encrypt = encrypt;
exports.hash = hash;
const jose_1 = require("jose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const key = new TextEncoder().encode(process.env.JWT_KEY);
function decrypt(session) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(session);
            const { payload } = yield (0, jose_1.jwtVerify)(session, key, {
                algorithms: ['HS256'],
            });
            console.log(payload);
            return payload;
        }
        catch (e) {
            return null;
        }
    });
}
function encrypt(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        return new jose_1.SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('1day')
            .sign(key);
    });
}
function hash(value) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcrypt_1.default.hash(value, 10);
    });
}
