"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewareApi_1 = __importDefault(require("./middlewareApi"));
const ProjectsRouter_1 = __importDefault(require("./projects/ProjectsRouter"));
const BlogsRouter_1 = __importDefault(require("./blogs/BlogsRouter"));
const AboutRouter_1 = __importDefault(require("./about/AboutRouter"));
const ContactsRouter_1 = __importDefault(require("./contacts/ContactsRouter"));
const CompetencesRouter_1 = __importDefault(require("./competences/CompetencesRouter"));
const MessageRouter_1 = __importDefault(require("./messages/MessageRouter"));
const AuthRouter_1 = __importDefault(require("./admin/AuthRouter"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3001;
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
}));
app.use(express_1.default.json());
app.use('/api/*', (req, res, next) => {
    if (req.method == 'POST') {
        // Apply middleware to all methods except GET
        return (0, middlewareApi_1.default)(req, res, next);
    }
    if (req.method == 'DELETE') {
        // Apply middleware to all methods except GET
        return (0, middlewareApi_1.default)(req, res, next);
    }
    if (req.method == 'PUT') {
        // Apply middleware to all methods except GET
        return (0, middlewareApi_1.default)(req, res, next);
    }
    // Skip middleware for GET requests
    next();
});
app.use('/api/projects', ProjectsRouter_1.default);
app.use('/api/blogs', BlogsRouter_1.default);
app.use('/api/about', AboutRouter_1.default);
app.use('/api/contacts', ContactsRouter_1.default);
app.use('/api/competences', CompetencesRouter_1.default);
app.use('/api/messages', MessageRouter_1.default);
app.use('/login', AuthRouter_1.default);
app.use('', (req, res, next) => {
    res.sendStatus(403);
});
app.use('/', (req, res, next) => {
    res.sendStatus(403);
});
app.listen(port, () => {
    console.log('port: 3001');
});
