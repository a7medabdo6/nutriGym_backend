import { BusinesService } from 'src/busines/busines.service';
import { Repository } from 'typeorm';
import { CreateCodeDto } from './dto/create-code.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare enum UserRole {
    superadmin = "superadmin",
    user = "user",
    admin = "admin"
}
export declare class UsersService {
    private repo;
    private readonly BusinesService;
    constructor(repo: Repository<User>, BusinesService: BusinesService);
    create(createUserDto: CreateUserDto): Promise<User>;
    createcode(CreateCodeDto: CreateCodeDto): Promise<User>;
    findAll(userRole: string): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    update(id: number, updateUser: Partial<User>): Promise<User>;
    remove(id: number): Promise<User>;
}
