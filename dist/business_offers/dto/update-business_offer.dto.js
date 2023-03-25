"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBusinessOfferDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_business_offer_dto_1 = require("./create-business_offer.dto");
class UpdateBusinessOfferDto extends (0, swagger_1.PartialType)(create_business_offer_dto_1.CreateBusinessOfferDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateBusinessOfferDto = UpdateBusinessOfferDto;
//# sourceMappingURL=update-business_offer.dto.js.map