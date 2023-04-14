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
const path_1 = require("path");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
const busines_service_1 = require("../busines/busines.service");
const users_service_1 = require("../users/users.service");
let BusinessOffersController = class BusinessOffersController {
    constructor(businessOffersService, BusinesService, usersService) {
        this.businessOffersService = businessOffersService;
        this.BusinesService = BusinesService;
        this.usersService = usersService;
    }
    async create(file, createBusinessOfferDto) {
        if (!file) {
            throw new common_1.BadRequestException(' please Add photo');
        }
        const busines = await this.BusinesService.findOne(+createBusinessOfferDto.busines);
        return this.businessOffersService.create(Object.assign(Object.assign({}, createBusinessOfferDto), { photo: file.filename }), busines);
    }
    async findAll(id) {
        var _a;
        const user = await this.usersService.findOne(id);
        let ids = [];
        console.log(user, 'user');
        for (let index = 0; index < ((_a = user === null || user === void 0 ? void 0 : user.busines) === null || _a === void 0 ? void 0 : _a.length); index++) {
            ids.push(user.busines[index].id);
        }
        return this.businessOffersService.findAll(ids, user.role);
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
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                callback(null, uniqueSuffix + (0, path_1.extname)(file.originalname));
            },
        }),
        fileFilter: (req, file, callback) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
                return callback(new Error('Only image files are allowed!'), false);
            }
            callback(null, true);
        },
        limits: {
            fileSize: 1024 * 1024,
        },
    })),
    openapi.ApiResponse({ status: 201, type: require("./entities/business_offer.entity").BusinessOffer }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_business_offer_dto_1.CreateBusinessOfferDto]),
    __metadata("design:returntype", Promise)
], BusinessOffersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BusinessOffersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/business_offer.entity").BusinessOffer }),
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
    openapi.ApiResponse({ status: 200, type: require("./entities/business_offer.entity").BusinessOffer }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BusinessOffersController.prototype, "remove", null);
BusinessOffersController = __decorate([
    (0, common_1.Controller)('business-offers'),
    __metadata("design:paramtypes", [business_offers_service_1.BusinessOffersService,
        busines_service_1.BusinesService,
        users_service_1.UsersService])
], BusinessOffersController);
exports.BusinessOffersController = BusinessOffersController;
//# sourceMappingURL=business_offers.controller.js.map