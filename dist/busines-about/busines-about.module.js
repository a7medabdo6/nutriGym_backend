"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinesAboutModule = void 0;
const common_1 = require("@nestjs/common");
const busines_about_service_1 = require("./busines-about.service");
const busines_about_controller_1 = require("./busines-about.controller");
let BusinesAboutModule = class BusinesAboutModule {
};
BusinesAboutModule = __decorate([
    (0, common_1.Module)({
        controllers: [busines_about_controller_1.BusinesAboutController],
        providers: [busines_about_service_1.BusinesAboutService]
    })
], BusinesAboutModule);
exports.BusinesAboutModule = BusinesAboutModule;
//# sourceMappingURL=busines-about.module.js.map