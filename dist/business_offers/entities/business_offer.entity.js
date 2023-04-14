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
exports.BusinessOffer = void 0;
const openapi = require("@nestjs/swagger");
const busine_entity_1 = require("../../busines/entities/busine.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let BusinessOffer = class BusinessOffer {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, price: { required: true, type: () => String }, duration: { required: true, type: () => String }, desc: { required: true, type: () => String }, photo: { required: true, type: () => String }, extra: { required: true, type: () => String }, busines: { required: true, type: () => require("../../busines/entities/busine.entity").Busine }, user: { required: false, type: () => [require("../../users/entities/user.entity").User] }, length: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BusinessOffer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BusinessOffer.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BusinessOffer.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BusinessOffer.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BusinessOffer.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BusinessOffer.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BusinessOffer.prototype, "extra", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => busine_entity_1.Busine, (Busine) => Busine.busines_offers),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", busine_entity_1.Busine)
], BusinessOffer.prototype, "busines", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, (user) => user.busines_offers, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }),
    (0, typeorm_1.JoinTable)({
        name: 'user_businesOffers',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'businesoffers_id',
            referencedColumnName: 'id',
        },
    }),
    __metadata("design:type", Array)
], BusinessOffer.prototype, "user", void 0);
BusinessOffer = __decorate([
    (0, typeorm_1.Entity)()
], BusinessOffer);
exports.BusinessOffer = BusinessOffer;
//# sourceMappingURL=business_offer.entity.js.map