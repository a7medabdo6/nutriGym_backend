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
exports.BusinessOffersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const business_offer_entity_1 = require("./entities/business_offer.entity");
const typeorm_2 = require("typeorm");
let BusinessOffersService = class BusinessOffersService {
    constructor(repo) {
        this.repo = repo;
    }
    create(createBusinessOfferDto, busines) {
        const BusinesOffers = this.repo.create(createBusinessOfferDto);
        BusinesOffers.busines = busines;
        return this.repo.save(BusinesOffers);
    }
    async findAll(ids, role) {
        console.log(ids);
        const [businesoffer, businesOfferCount] = await this.repo.findAndCount(Object.assign(Object.assign({}, (role != 'superadmin' && { where: { busines: { id: (0, typeorm_2.In)(ids) } } })), { relations: { busines: true } }));
        return { businesoffer, businesOfferCount };
    }
    findOne(id) {
        return this.repo.findOne({ where: { id } });
    }
    update(id, updateBusinessOfferDto) {
        return `This action updates a #${id} businessOffer`;
    }
    async remove(id) {
        const offer = await this.repo.findOne({ where: { id } });
        if (!offer) {
            throw new common_1.NotFoundException('Busines Offer not found');
        }
        return this.repo.remove(offer);
    }
};
BusinessOffersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(business_offer_entity_1.BusinessOffer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BusinessOffersService);
exports.BusinessOffersService = BusinessOffersService;
//# sourceMappingURL=business_offers.service.js.map