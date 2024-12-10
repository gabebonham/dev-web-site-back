"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(userName, id, password, lastSession) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.lastSession = lastSession;
    }
}
exports.default = User;
