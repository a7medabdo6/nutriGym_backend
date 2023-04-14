import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateBusineDto } from './dto/create-busine.dto';
import { UpdateBusineDto } from './dto/update-busine.dto';
import { Busine } from './entities/busine.entity';
export declare class BusinesService {
    private repo;
    constructor(repo: Repository<Busine>);
    create(createBusineDto: CreateBusineDto): Promise<Busine>;
    findAll(): Promise<{
        busines: Busine[];
        businesCount: number;
    }>;
    findOne(id: number): Promise<Busine>;
    update(id: number, updateBusineDto: UpdateBusineDto, User: User): Promise<Busine>;
    remove(id: number): string;
}
