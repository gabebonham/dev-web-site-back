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
exports.getAllContactsController = getAllContactsController;
exports.getContactByIdController = getContactByIdController;
exports.createContactController = createContactController;
exports.deleteContactByIdController = deleteContactByIdController;
const ContactService_1 = require("../services/ContactService");
function getAllContactsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conts = yield (0, ContactService_1.getAllContacts)();
        res.send(conts);
    });
}
function getContactByIdController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const contact = yield (0, ContactService_1.getContactById)(body.id);
        res.send(contact);
    });
}
function createContactController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const contact = req.body;
        yield (0, ContactService_1.createContact)(contact);
        res.sendStatus(200);
    });
}
function deleteContactByIdController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        yield (0, ContactService_1.deleteContactById)(Number.parseInt(id));
        res.sendStatus(200);
    });
}
