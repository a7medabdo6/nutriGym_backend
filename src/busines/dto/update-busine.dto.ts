import { PartialType } from '@nestjs/swagger';
import { CreateBusineDto } from './create-busine.dto';

export class UpdateBusineDto extends PartialType(CreateBusineDto) {}
