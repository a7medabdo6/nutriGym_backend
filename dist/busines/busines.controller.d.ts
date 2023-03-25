import { BusinesService } from './busines.service';
import { CreateBusineDto } from './dto/create-busine.dto';
import { UpdateBusineDto } from './dto/update-busine.dto';
export declare class BusinesController {
    private readonly businesService;
    constructor(businesService: BusinesService);
    create(createBusineDto: CreateBusineDto): Promise<import("./entities/busine.entity").Busine>;
    findAll(): string;
    findOne(id: string): Promise<import("./entities/busine.entity").Busine>;
    update(id: string, updateBusineDto: UpdateBusineDto): string;
    remove(id: string): string;
}
