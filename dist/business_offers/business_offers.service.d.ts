import { CreateBusinessOfferDto } from './dto/create-business_offer.dto';
import { UpdateBusinessOfferDto } from './dto/update-business_offer.dto';
export declare class BusinessOffersService {
    create(createBusinessOfferDto: CreateBusinessOfferDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBusinessOfferDto: UpdateBusinessOfferDto): string;
    remove(id: number): string;
}
