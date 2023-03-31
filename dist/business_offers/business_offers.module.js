"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessOffersModule = void 0;
const common_1 = require("@nestjs/common");
const business_offers_service_1 = require("./business_offers.service");
const business_offers_controller_1 = require("./business_offers.controller");
const typeorm_1 = require("@nestjs/typeorm");
const business_offer_entity_1 = require("./entities/business_offer.entity");
let BusinessOffersModule = class BusinessOffersModule {
};
BusinessOffersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([business_offer_entity_1.BusinessOffer])],
        controllers: [business_offers_controller_1.BusinessOffersController],
        providers: [business_offers_service_1.BusinessOffersService]
    })
], BusinessOffersModule);
exports.BusinessOffersModule = BusinessOffersModule;
//# sourceMappingURL=business_offers.module.js.map