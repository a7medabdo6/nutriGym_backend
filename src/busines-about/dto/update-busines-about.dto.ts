import { PartialType } from '@nestjs/swagger';
import { CreateBusinesAboutDto } from './create-busines-about.dto';

export class UpdateBusinesAboutDto extends PartialType(CreateBusinesAboutDto) {}
