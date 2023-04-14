import { BusinesService } from 'src/busines/busines.service';
import { Repository } from 'typeorm';
import { CreateCodeDto } from './dto/create-code.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { BusinessOffersService } from 'src/business_offers/business_offers.service';
export declare enum UserRole {
    superadmin = "superadmin",
    user = "user",
    admin = "admin"
}
export declare class UsersService {
    private repo;
    private readonly BusinesService;
    private offerService;
    constructor(repo: Repository<User>, BusinesService: BusinesService, offerService: BusinessOffersService);
    create(createUserDto: CreateUserDto): Promise<User>;
    createcode(CreateCodeDto: CreateCodeDto): Promise<User>;
    findAll(id: number): Promise<{
        users: User[];
        usersCount: number;
    }>;
    findOne(id: number): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    update(id: number, updateUser: Partial<User>): Promise<User>;
    remove(id: number): Promise<User>;
}
