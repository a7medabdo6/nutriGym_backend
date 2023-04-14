"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAdminPanel = void 0;
const admin_bro_typeorm_1 = require("admin-bro-typeorm");
const admin_bro_1 = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const user_resource_1 = require("./resources/user.resource");
async function setupAdminPanel(app) {
    admin_bro_1.default.registerAdapter({ Database: admin_bro_typeorm_1.Database, Resource: admin_bro_typeorm_1.Resource });
    const adminBro = new admin_bro_1.default({
        resources: [user_resource_1.default],
        rootPath: '/admin',
    });
    const router = AdminBroExpress.buildRouter(adminBro);
    app.use(adminBro.options.rootPath, router);
}
exports.setupAdminPanel = setupAdminPanel;
//# sourceMappingURL=admin-panel.plugin.js.map