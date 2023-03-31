"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBusinesTypeDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_busines_type_dto_1 = require("./create-busines-type.dto");
class UpdateBusinesTypeDto extends (0, swagger_1.PartialType)(create_busines_type_dto_1.CreateBusinesTypeDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateBusinesTypeDto = UpdateBusinesTypeDto;
//# sourceMappingURL=update-busines-type.dto.js.map