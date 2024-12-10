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
exports.getAllBlogsController = getAllBlogsController;
exports.getBlogByIdController = getBlogByIdController;
exports.createBlogController = createBlogController;
exports.updateBlogController = updateBlogController;
exports.deleteBlogByIdController = deleteBlogByIdController;
const BlogsService_1 = require("../services/BlogsService");
function getAllBlogsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const blogs = yield (0, BlogsService_1.getAllBlogs)();
        res.send(blogs);
    });
}
function getBlogByIdController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const blogs = yield (0, BlogsService_1.getBlogById)(Number.parseInt(id));
        res.send(blogs);
    });
}
function createBlogController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, BlogsService_1.createBlog)(req.body);
        res.sendStatus(200);
    });
}
function updateBlogController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        yield (0, BlogsService_1.updateBlog)(req.body);
        res.sendStatus(200);
    });
}
function deleteBlogByIdController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        yield (0, BlogsService_1.deleteBlogById)(Number.parseInt(id));
        res.sendStatus(200);
    });
}
