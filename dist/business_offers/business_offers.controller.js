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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessOffersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const business_offers_service_1 = require("./business_offers.service");
const create_business_offer_dto_1 = require("./dto/create-business_offer.dto");
const update_business_offer_dto_1 = require("./dto/update-business_offer.dto");
let BusinessOffersController = class BusinessOffersController {
    constructor(businessOffersService) {
        this.businessOffersService = businessOffersService;
    }
    create(createBusinessOfferDto) {
        return this.businessOffersService.create(createBusinessOfferDto);
    }
    findAll() {
        return this.businessOffersService.findAll();
    }
    findOne(id) {
        return this.businessOffersService.findOne(+id);
    }
    update(id, updateBusinessOfferDto) {
        return this.businessOffersService.update(+id, updateBusinessOfferDto);
    }
    remove(id) {
        return this.businessOffersService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_business_offer_dto_1.CreateBusinessOfferDto]),
    __metadata("design:returntype", void 0)
], BusinessOffersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BusinessOffersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BusinessOffersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_business_offer_dto_1.UpdateBusinessOfferDto]),
    __metadata("design:returntype", void 0)
], BusinessOffersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BusinessOffersController.prototype, "remove", null);
BusinessOffersController = __decorate([
    (0, common_1.Controller)('business-offers'),
    __metadata("design:paramtypes", [business_offers_service_1.BusinessOffersService])
], BusinessOffersController);
exports.BusinessOffersController = BusinessOffersController;
//# sourceMappingURL=business_offers.controller.js.map