/// <reference types="multer" />
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { User } from './entities/user.entity';
export declare class UsersController {
    private readonly usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    signup(file: Express.Multer.File, createUserDto: CreateUserDto): Promise<void>;
    signin(createUserDto: any): Promise<{
        Token: any;
        id: number;
        email: string;
        phone: string;
        photo: string;
        password: string;
        offerId: number;
        username: string;
        role: import("./entities/user.entity").UserRole;
        busines?: import("../busines/entities/busine.entity").Busine[];
        busines_offers?: import("../business_offers/entities/business_offer.entity").BusinessOffer[];
    }>;
    signout(session: any): Promise<string>;
    findAll(id: number): Promise<{
        users: User[];
        usersCount: number;
    }>;
    findOne(id: number): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<User>;
}
