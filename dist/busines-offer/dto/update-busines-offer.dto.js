"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBusinesOfferDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_busines_offer_dto_1 = require("./create-busines-offer.dto");
class UpdateBusinesOfferDto extends (0, swagger_1.PartialType)(create_busines_offer_dto_1.CreateBusinesOfferDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateBusinesOfferDto = UpdateBusinesOfferDto;
//# sourceMappingURL=update-busines-offer.dto.js.map