/// <reference types="multer" />
import { UsersService } from 'src/users/users.service';
import { BusinesService } from './busines.service';
import { CreateBusineDto } from './dto/create-busine.dto';
import { UpdateBusineDto } from './dto/update-busine.dto';
export declare class BusinesController {
    private readonly businesService;
    private readonly userService;
    constructor(businesService: BusinesService, userService: UsersService);
    create(file: Express.Multer.File, createBusineDto: CreateBusineDto): Promise<import("./entities/busine.entity").Busine>;
    findAll(user: unknown): Promise<{
        busines: import("./entities/busine.entity").Busine[];
        businesCount: number;
    }>;
    findOne(id: string): Promise<import("./entities/busine.entity").Busine>;
    update(id: string, updateBusineDto: UpdateBusineDto): Promise<import("./entities/busine.entity").Busine>;
    remove(id: string): string;
}
