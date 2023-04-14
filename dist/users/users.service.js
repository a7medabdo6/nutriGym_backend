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
exports.UsersService = exports.UserRole = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const busines_service_1 = require("../busines/busines.service");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const business_offers_service_1 = require("../business_offers/business_offers.service");
var UserRole;
(function (UserRole) {
    UserRole["superadmin"] = "superadmin";
    UserRole["user"] = "user";
    UserRole["admin"] = "admin";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
let UsersService = class UsersService {
    constructor(repo, BusinesService, offerService) {
        this.repo = repo;
        this.BusinesService = BusinesService;
        this.offerService = offerService;
    }
    async create(createUserDto) {
        const user = this.repo.create(createUserDto);
        const busines = this.BusinesService.findOne(createUserDto.businesId);
        const offer = await this.offerService.findOne(createUserDto.offer);
        user.busines_offers = [offer];
        return this.repo.save(user);
    }
    createcode(CreateCodeDto) {
        const user = this.repo.create(CreateCodeDto);
        return this.repo.save(user);
    }
    async findAll(id) {
        var _a;
        const user = await this.findOne(id);
        let ids = [];
        for (let index = 0; index < ((_a = user === null || user === void 0 ? void 0 : user.busines) === null || _a === void 0 ? void 0 : _a.length); index++) {
            ids.push(user.busines[index].id);
        }
        const [users, usersCount] = await this.repo.findAndCount({
            where: Object.assign({ role: (0, typeorm_2.Not)(UserRole.superadmin) }, ((user === null || user === void 0 ? void 0 : user.role) != 'superadmin' && {
                busines_offers: { busines: { id: (0, typeorm_2.In)(ids) } },
            })),
        });
        return { users, usersCount };
    }
    async findOne(id) {
        console.log(id, 'id');
        if (!id) {
            throw new common_1.UnauthorizedException('unAuthorized');
        }
        const user = await this.repo.findOne({
            where: { id },
            relations: { busines: true },
        });
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        return user;
    }
    async findOneByEmail(email) {
        const user = await this.repo.findOne({
            where: { email },
            relations: {
                busines: true,
            },
        });
        return user;
    }
    async update(id, updateUser) {
        const user = await this.repo.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        Object.assign(user, updateUser);
        return this.repo.save(user);
    }
    async remove(id) {
        const user = await this.repo.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        return this.repo.remove(user);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        busines_service_1.BusinesService,
        business_offers_service_1.BusinessOffersService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map