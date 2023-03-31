"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBusinesAboutDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_busines_about_dto_1 = require("./create-busines-about.dto");
class UpdateBusinesAboutDto extends (0, swagger_1.PartialType)(create_busines_about_dto_1.CreateBusinesAboutDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateBusinesAboutDto = UpdateBusinesAboutDto;
//# sourceMappingURL=update-busines-about.dto.js.map