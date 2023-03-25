"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBusineDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_busine_dto_1 = require("./create-busine.dto");
class UpdateBusineDto extends (0, swagger_1.PartialType)(create_busine_dto_1.CreateBusineDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateBusineDto = UpdateBusineDto;
//# sourceMappingURL=update-busine.dto.js.map