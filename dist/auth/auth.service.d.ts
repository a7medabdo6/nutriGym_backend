import { UsersService } from '../users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    signup(createUserDto: CreateUserDto): Promise<void>;
    signin(createUserDto: CreateUserDto): Promise<{
        Token: any;
        id: number;
        email: string;
        phone: string;
        photo: string;
        password: string;
        offerId: number;
        username: string;
        role: import("../users/entities/user.entity").UserRole;
        busines?: import("../busines/entities/busine.entity").Busine[];
        busines_offers?: import("../business_offers/entities/business_offer.entity").BusinessOffer[];
    }>;
}
