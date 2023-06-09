"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinesType = void 0;
const openapi = require("@nestjs/swagger");
const busine_entity_1 = require("../../busines/entities/busine.entity");
const typeorm_1 = require("typeorm");
let BusinesType = class BusinesType {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, cover: { required: true, type: () => String }, title: { required: true, type: () => String }, desc: { required: true, type: () => String }, extra: { required: true, type: () => String }, busines: { required: true, type: () => require("../../busines/entities/busine.entity").Busine } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BusinesType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BusinesType.prototype, "cover", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BusinesType.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BusinesType.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], BusinesType.prototype, "extra", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => busine_entity_1.Busine, (busine) => busine.busines_type),
    __metadata("design:type", busine_entity_1.Busine)
], BusinesType.prototype, "busines", void 0);
BusinesType = __decorate([
    (0, typeorm_1.Entity)()
], BusinesType);
exports.BusinesType = BusinesType;
//# sourceMappingURL=busines-type.entity.js.map