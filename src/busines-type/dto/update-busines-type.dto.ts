import { PartialType } from '@nestjs/swagger';
import { CreateBusinesTypeDto } from './create-busines-type.dto';

export class UpdateBusinesTypeDto extends PartialType(CreateBusinesTypeDto) {}
