/// <reference types="multer" />
import { BusinesTypeService } from './busines-type.service';
import { CreateBusinesTypeDto } from './dto/create-busines-type.dto';
import { UpdateBusinesTypeDto } from './dto/update-busines-type.dto';
export declare class BusinesTypeController {
    private readonly businesTypeService;
    constructor(businesTypeService: BusinesTypeService);
    create(file: Express.Multer.File, createBusinesTypeDto: CreateBusinesTypeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBusinesTypeDto: UpdateBusinesTypeDto): string;
    remove(id: string): string;
}
