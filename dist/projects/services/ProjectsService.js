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
exports.getAllProjects = getAllProjects;
exports.getProjectById = getProjectById;
exports.createProject = createProject;
exports.updateProject = updateProject;
exports.deleteProjectById = deleteProjectById;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getAllProjects() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.project.findMany();
    });
}
function getProjectById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.project.findUnique({ where: { id: id } });
    });
}
function createProject(project) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.project.create({
            data: {
                name: project.name,
                link: project.link,
                description: project.description,
            },
        });
    });
}
function updateProject(project) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.project.update({
            where: { id: project.id },
            data: project,
        });
    });
}
function deleteProjectById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.project.delete({ where: { id: id } });
    });
}
