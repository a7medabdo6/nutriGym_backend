import { CreateBusinesOfferDto } from './dto/create-busines-offer.dto';
import { UpdateBusinesOfferDto } from './dto/update-busines-offer.dto';
export declare class BusinesOfferService {
    create(createBusinesOfferDto: CreateBusinesOfferDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBusinesOfferDto: UpdateBusinesOfferDto): string;
    remove(id: number): string;
}
