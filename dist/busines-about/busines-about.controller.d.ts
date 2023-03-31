import { BusinesAboutService } from './busines-about.service';
import { CreateBusinesAboutDto } from './dto/create-busines-about.dto';
import { UpdateBusinesAboutDto } from './dto/update-busines-about.dto';
export declare class BusinesAboutController {
    private readonly businesAboutService;
    constructor(businesAboutService: BusinesAboutService);
    create(createBusinesAboutDto: CreateBusinesAboutDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBusinesAboutDto: UpdateBusinesAboutDto): string;
    remove(id: string): string;
}
