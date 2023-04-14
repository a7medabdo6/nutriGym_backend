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
exports.BusinesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const busine_entity_1 = require("./entities/busine.entity");
let BusinesService = class BusinesService {
    constructor(repo) {
        this.repo = repo;
    }
    create(createBusineDto) {
        const busines = this.repo.create(createBusineDto);
        return this.repo.save(busines);
    }
    async findAll() {
        const [busines, businesCount] = await this.repo.findAndCount({});
        return { busines, businesCount };
    }
    findOne(id) {
        return this.repo.findOne({ where: { id } });
    }
    async update(id, updateBusineDto, User) {
        const busines = await this.repo.findOne({ where: { id } });
        if (!busines) {
            throw new common_1.NotFoundException('busines not found');
        }
        Object.assign(busines, updateBusineDto);
        busines.user = [User];
        return this.repo.save(busines);
    }
    remove(id) {
        return `This action removes a #${id} busine`;
    }
};
BusinesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(busine_entity_1.Busine)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BusinesService);
exports.BusinesService = BusinesService;
//# sourceMappingURL=busines.service.js.map