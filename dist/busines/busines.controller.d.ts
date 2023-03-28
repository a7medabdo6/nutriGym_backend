import { UsersService } from 'src/users/users.service';
import { BusinesService } from './busines.service';
import { CreateBusineDto } from './dto/create-busine.dto';
import { UpdateBusineDto } from './dto/update-busine.dto';
export declare class BusinesController {
    private readonly businesService;
    private readonly userService;
    constructor(businesService: BusinesService, userService: UsersService);
    create(createBusineDto: CreateBusineDto): Promise<import("./entities/busine.entity").Busine>;
    findAll(): string;
    findOne(id: string): Promise<import("./entities/busine.entity").Busine>;
    update(id: string, updateBusineDto: UpdateBusineDto): Promise<import("./entities/busine.entity").Busine>;
    remove(id: string): string;
}
