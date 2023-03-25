import { Busine } from 'src/busines/entities/busine.entity';
export declare enum UserRole {
    superadmin = "superadmin",
    user = "user",
    admin = "admin"
}
export declare class User {
    id: number;
    email: string;
    phone: string;
    photo: string;
    password: string;
    username: string;
    role: UserRole;
    busines?: Busine[];
}
