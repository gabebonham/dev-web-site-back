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
exports.getAllMessages = getAllMessages;
exports.getMessageById = getMessageById;
exports.storeMessage = storeMessage;
exports.deleteMessageById = deleteMessageById;
exports.updateMessage = updateMessage;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getAllMessages() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.message.findMany();
    });
}
function getMessageById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.message.findUnique({ where: { id: id } });
    });
}
function storeMessage(message) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.message.create({
            data: {
                msg: message.msg,
                email: message.email,
                scheduled: message.scheduled,
            },
        });
    });
}
function deleteMessageById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.message.delete({ where: { id: id } });
    });
}
function updateMessage(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const message = (yield getMessageById(id));
        message.isNew = false;
        yield prisma.message.update({
            where: { id: id },
            data: message,
        });
    });
}
