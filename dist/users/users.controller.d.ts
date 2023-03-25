import { I18nContext } from 'nestjs-i18n';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { User } from './entities/user.entity';
export declare class UsersController {
    private readonly usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    getHello(i18n: I18nContext): Promise<any>;
    signup(createUserDto: CreateUserDto): Promise<User>;
    signin(createUserDto: any): Promise<{
        Token: any;
        id: number;
        email: string;
        phone: string;
        photo: string;
        password: string;
        username: string;
        role: import("./entities/user.entity").UserRole;
        busines?: import("../busines/entities/busine.entity").Busine[];
    }>;
    signout(session: any): Promise<string>;
    findAll(userRole: string): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<User>;
}
