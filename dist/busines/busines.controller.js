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
const users_service_1 = require("../users/users.service");
const busines_service_1 = require("./busines.service");
const create_busine_dto_1 = require("./dto/create-busine.dto");
const update_busine_dto_1 = require("./dto/update-busine.dto");
const path_1 = require("path");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
const current_user_interceptor_1 = require("../users/interceptors/current-user.interceptor");
const current_user_decorator_1 = require("../decorators/current-user.decorator");
const auth_guard_1 = require("../guards/auth.guard");
let BusinesController = class BusinesController {
    constructor(businesService, userService) {
        this.businesService = businesService;
        this.userService = userService;
    }
    async create(file, createBusineDto) {
        console.log(file, 'fileee');
        if (!file) {
            throw new common_1.BadRequestException(' please Add Logo');
        }
        const User = await this.userService.findOne(+createBusineDto.userId);
        const res = await this.businesService.create(Object.assign(Object.assign({}, createBusineDto), { logo: file.filename }));
        return this.businesService.update(res.id, {}, User);
    }
    findAll(user) {
        console.log(user);
        return this.businesService.findAll();
    }
    findOne(id) {
        return this.businesService.findOne(+id);
    }
    async update(id, updateBusineDto) {
        console.log(updateBusineDto, 'user');
        const User = await this.userService.findOne(+updateBusineDto.userId);
        return this.businesService.update(+id, updateBusineDto, User);
    }
    remove(id) {
        return this.businesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('logo', {
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
    openapi.ApiResponse({ status: 201, type: require("./entities/busine.entity").Busine }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_busine_dto_1.CreateBusineDto]),
    __metadata("design:returntype", Promise)
], BusinesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
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
    openapi.ApiResponse({ status: 200, type: require("./entities/busine.entity").Busine }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_busine_dto_1.UpdateBusineDto]),
    __metadata("design:returntype", Promise)
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
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UseInterceptors)(current_user_interceptor_1.CurrentUserInterceptor),
    __metadata("design:paramtypes", [busines_service_1.BusinesService,
        users_service_1.UsersService])
], BusinesController);
exports.BusinesController = BusinesController;
//# sourceMappingURL=busines.controller.js.map