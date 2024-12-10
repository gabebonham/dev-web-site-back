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
exports.getAllContacts = getAllContacts;
exports.getContactById = getContactById;
exports.createContact = createContact;
exports.deleteContactById = deleteContactById;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getAllContacts() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.contacts.findMany();
    });
}
function getContactById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.contacts.findUnique({ where: { id: id } });
    });
}
function createContact(contact) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.contacts.create({
            data: {
                platform_name: contact.platform_name,
                platform_user_page_link: contact.platform_user_page_link,
                email: contact.email,
            },
        });
    });
}
function deleteContactById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.contacts.delete({ where: { id: id } });
    });
}
