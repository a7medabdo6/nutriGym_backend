import { BusinesOfferService } from './busines-offer.service';
import { CreateBusinesOfferDto } from './dto/create-busines-offer.dto';
import { UpdateBusinesOfferDto } from './dto/update-busines-offer.dto';
export declare class BusinesOfferController {
    private readonly businesOfferService;
    constructor(businesOfferService: BusinesOfferService);
    create(createBusinesOfferDto: CreateBusinesOfferDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBusinesOfferDto: UpdateBusinesOfferDto): string;
    remove(id: string): string;
}
