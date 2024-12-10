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
exports.storeMessageController = storeMessageController;
exports.getAllMessagesController = getAllMessagesController;
exports.getMessageByIdController = getMessageByIdController;
exports.updateMessageController = updateMessageController;
exports.deleteMessageByIdController = deleteMessageByIdController;
const MessagesService_1 = require("../service/MessagesService");
function storeMessageController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, MessagesService_1.storeMessage)(req.body);
        res.sendStatus(200);
    });
}
function getAllMessagesController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const messages = yield (0, MessagesService_1.getAllMessages)();
        res.send(messages);
    });
}
function getMessageByIdController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const message = yield (0, MessagesService_1.getMessageById)(Number.parseInt(id));
        res.send(message);
    });
}
function updateMessageController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        yield (0, MessagesService_1.updateMessage)(Number.parseInt(id));
        res.sendStatus(200);
    });
}
function deleteMessageByIdController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        yield (0, MessagesService_1.deleteMessageById)(id);
        res.sendStatus(200);
    });
}
