"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const user_entity_1 = require("./users/entities/user.entity");
const busines_module_1 = require("./busines/busines.module");
const busine_entity_1 = require("./busines/entities/busine.entity");
const business_offers_module_1 = require("./business_offers/business_offers.module");
const busines_type_module_1 = require("./busines-type/busines-type.module");
const busines_type_entity_1 = require("./busines-type/entities/busines-type.entity");
const business_offer_entity_1 = require("./business_offers/entities/business_offer.entity");
const busines_about_module_1 = require("./busines-about/busines-about.module");
const review_module_1 = require("./review/review.module");
const DEFAULT_ADMIN = {
    email: 'admin@example.com',
    password: 'password',
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                username: 'root',
                port: 3306,
                host: 'localhost',
                database: 'nutrigym',
                password: '',
                entities: [
                    user_entity_1.User,
                    busine_entity_1.Busine,
                    busines_type_entity_1.BusinesType,
                    business_offer_entity_1.BusinessOffer,
                ],
                synchronize: false,
            }),
            users_module_1.UsersModule,
            busines_module_1.BusinesModule,
            business_offers_module_1.BusinessOffersModule,
            busines_type_module_1.BusinesTypeModule,
            busines_about_module_1.BusinesAboutModule,
            review_module_1.ReviewModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map