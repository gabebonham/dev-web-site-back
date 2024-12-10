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
exports.getAllProjectsController = getAllProjectsController;
exports.getProjectByIdController = getProjectByIdController;
exports.createProjectController = createProjectController;
exports.updateProjectController = updateProjectController;
exports.deleteProjectByIdController = deleteProjectByIdController;
const ProjectsService_1 = require("../services/ProjectsService");
function getAllProjectsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const projects = yield (0, ProjectsService_1.getAllProjects)();
        res.send(projects);
    });
}
function getProjectByIdController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const projects = yield (0, ProjectsService_1.getProjectById)(req.body.id);
        res.send(projects);
    });
}
function createProjectController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, ProjectsService_1.createProject)(req.body);
        res.status(200);
        res.sendStatus(200);
    });
}
function updateProjectController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const project = req.body;
        yield (0, ProjectsService_1.updateProject)(project);
        res.sendStatus(200);
    });
}
function deleteProjectByIdController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        yield (0, ProjectsService_1.deleteProjectById)(Number.parseInt(id));
        res.status(200);
        res.sendStatus(200);
    });
}
