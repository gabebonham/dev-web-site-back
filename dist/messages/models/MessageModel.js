"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    constructor(id, msg, email, scheduled, createdAt, isNew) {
        this.id = id;
        this.msg = msg;
        this.email = email;
        this.scheduled = scheduled;
        this.createdAt = createdAt;
        this.isNew = isNew;
    }
}
exports.default = Message;
