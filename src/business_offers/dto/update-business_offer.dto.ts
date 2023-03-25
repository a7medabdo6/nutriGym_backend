import { PartialType } from '@nestjs/swagger';
import { CreateBusinessOfferDto } from './create-business_offer.dto';

export class UpdateBusinessOfferDto extends PartialType(CreateBusinessOfferDto) {}
