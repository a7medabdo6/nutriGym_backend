"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinesModule = void 0;
const common_1 = require("@nestjs/common");
const busines_service_1 = require("./busines.service");
const busines_controller_1 = require("./busines.controller");
const busine_entity_1 = require("./entities/busine.entity");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("../users/users.module");
let BusinesModule = class BusinesModule {
};
BusinesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([busine_entity_1.Busine]), (0, common_1.forwardRef)(() => users_module_1.UsersModule)],
        controllers: [busines_controller_1.BusinesController],
        providers: [busines_service_1.BusinesService],
        exports: [busines_service_1.BusinesService],
    })
], BusinesModule);
exports.BusinesModule = BusinesModule;
//# sourceMappingURL=busines.module.js.map