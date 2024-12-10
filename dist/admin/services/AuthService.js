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
exports.login = login;
exports.verifyUser = verifyUser;
exports.createSession = createSession;
exports.authenticate = authenticate;
const client_1 = require("@prisma/client");
const JWT_1 = require("../lib/JWT");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new client_1.PrismaClient();
const cookie = {
    name: 'session',
    options: { httpOnly: true, secure: true, sameSite: 'lax', path: '/' },
    duration: 24 * 60 * 60 * 1000,
};
function login(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const userIsValid = yield verifyUser(user);
        if (userIsValid) {
            const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
            const session = yield createSession(user, expires);
            return Object.assign(Object.assign({ session: session }, cookie.options), { expires });
        }
        return null;
    });
}
function verifyUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const dbUser = yield prisma.users.findUnique({
            where: { userName: user.userName },
        });
        console.log(dbUser);
        return compareUsers(user, dbUser);
    });
}
function compareUsers(incomingUser, dbUser) {
    return __awaiter(this, void 0, void 0, function* () {
        if (dbUser) {
            const a = bcrypt_1.default.compare(incomingUser.password, dbUser.password);
            console.log(yield (0, JWT_1.hash)(incomingUser.password));
            return a;
        }
        else {
            return false;
        }
    });
}
function createSession(user, expires) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, JWT_1.encrypt)({
            user: user,
            expires: expires,
        });
    });
}
function authenticate(session) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(session + 'ui');
            const decryptedSession = yield (0, JWT_1.decrypt)(JSON.parse(session));
            if (decryptedSession) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            return false;
        }
    });
}
