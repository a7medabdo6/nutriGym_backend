import { CreateBusinesTypeDto } from './dto/create-busines-type.dto';
import { UpdateBusinesTypeDto } from './dto/update-busines-type.dto';
export declare class BusinesTypeService {
    create(createBusinesTypeDto: CreateBusinesTypeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBusinesTypeDto: UpdateBusinesTypeDto): string;
    remove(id: number): string;
}
