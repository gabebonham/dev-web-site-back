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
exports.getAllBlogs = getAllBlogs;
exports.getBlogById = getBlogById;
exports.createBlog = createBlog;
exports.updateBlog = updateBlog;
exports.deleteBlogById = deleteBlogById;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getAllBlogs() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.blog.findMany();
    });
}
function getBlogById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.blog.findUnique({
            where: { id: id },
        });
    });
}
function createBlog(blog) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.blog.create({
            data: {
                title: blog.title,
                body: blog.body,
                imageName: blog.imageName,
            },
        });
    });
}
function updateBlog(blog) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(blog);
        yield prisma.blog.update({
            where: {
                id: blog.id,
            },
            data: blog,
        });
    });
}
function deleteBlogById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.blog.delete({ where: { id: id } });
    });
}
