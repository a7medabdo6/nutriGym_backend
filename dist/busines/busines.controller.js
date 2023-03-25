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
exports.BusinesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const busines_service_1 = require("./busines.service");
const create_busine_dto_1 = require("./dto/create-busine.dto");
const update_busine_dto_1 = require("./dto/update-busine.dto");
let BusinesController = class BusinesController {
    constructor(businesService) {
        this.businesService = businesService;
    }
    create(createBusineDto) {
        return this.businesService.create(createBusineDto);
    }
    findAll() {
        return this.businesService.findAll();
    }
    findOne(id) {
        return this.businesService.findOne(+id);
    }
    update(id, updateBusineDto) {
        return this.businesService.update(+id, updateBusineDto);
    }
    remove(id) {
        return this.businesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/busine.entity").Busine }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_busine_dto_1.CreateBusineDto]),
    __metadata("design:returntype", void 0)
], BusinesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BusinesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/busine.entity").Busine }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BusinesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_busine_dto_1.UpdateBusineDto]),
    __metadata("design:returntype", void 0)
], BusinesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BusinesController.prototype, "remove", null);
BusinesController = __decorate([
    (0, common_1.Controller)('busines'),
    __metadata("design:paramtypes", [busines_service_1.BusinesService])
], BusinesController);
exports.BusinesController = BusinesController;
//# sourceMappingURL=busines.controller.js.map