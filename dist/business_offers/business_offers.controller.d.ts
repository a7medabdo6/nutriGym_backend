import { BusinessOffersService } from './business_offers.service';
import { CreateBusinessOfferDto } from './dto/create-business_offer.dto';
import { UpdateBusinessOfferDto } from './dto/update-business_offer.dto';
export declare class BusinessOffersController {
    private readonly businessOffersService;
    constructor(businessOffersService: BusinessOffersService);
    create(createBusinessOfferDto: CreateBusinessOfferDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBusinessOfferDto: UpdateBusinessOfferDto): string;
    remove(id: string): string;
}
