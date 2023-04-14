import { CreateBusinessOfferDto } from './dto/create-business_offer.dto';
import { UpdateBusinessOfferDto } from './dto/update-business_offer.dto';
import { Busine } from 'src/busines/entities/busine.entity';
import { BusinessOffer } from './entities/business_offer.entity';
import { Repository } from 'typeorm';
export declare class BusinessOffersService {
    private repo;
    constructor(repo: Repository<BusinessOffer>);
    create(createBusinessOfferDto: CreateBusinessOfferDto, busines: Busine): Promise<BusinessOffer>;
    findAll(ids: number[], role: string): Promise<{
        businesoffer: BusinessOffer[];
        businesOfferCount: number;
    }>;
    findOne(id: number): Promise<BusinessOffer>;
    update(id: number, updateBusinessOfferDto: UpdateBusinessOfferDto): string;
    remove(id: number): Promise<BusinessOffer>;
}
