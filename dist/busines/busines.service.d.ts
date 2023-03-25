import { Repository } from 'typeorm';
import { CreateBusineDto } from './dto/create-busine.dto';
import { UpdateBusineDto } from './dto/update-busine.dto';
import { Busine } from './entities/busine.entity';
export declare class BusinesService {
    private repo;
    constructor(repo: Repository<Busine>);
    create(createBusineDto: CreateBusineDto): Promise<Busine>;
    findAll(): string;
    findOne(id: number): Promise<Busine>;
    update(id: number, updateBusineDto: UpdateBusineDto): string;
    remove(id: number): string;
}
