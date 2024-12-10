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
exports.getAllCompetencesController = getAllCompetencesController;
exports.getCompetenceByIdController = getCompetenceByIdController;
exports.createCompetenceController = createCompetenceController;
exports.deleteCompetenceByIdController = deleteCompetenceByIdController;
const CompetencesService_1 = require("../services/CompetencesService");
function getAllCompetencesController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const competences = yield (0, CompetencesService_1.getAllCompetences)();
        res.send(competences);
    });
}
function getCompetenceByIdController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const competence = yield (0, CompetencesService_1.getCompetenceById)(req.body.id);
        res.send(JSON.stringify({ competence: competence }));
    });
}
function createCompetenceController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, CompetencesService_1.createCompetence)(req.body);
        res.sendStatus(200);
    });
}
function deleteCompetenceByIdController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        yield (0, CompetencesService_1.deleteCompetenceById)(Number.parseInt(id));
        res.sendStatus(200);
    });
}
