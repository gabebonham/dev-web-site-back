"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contact {
    constructor(id, platformName, platformUserPageLink, email) {
        this.id = id;
        this.platform_name = platformName;
        this.platform_user_page_link = platformUserPageLink;
        this.email = email;
    }
}
exports.default = Contact;
