export declare enum UserRole {
    superadmin = "superadmin",
    user = "user",
    admin = "admin"
}
export declare class CreateUserDto {
    email: string;
    password: string;
    username: string;
    role: UserRole;
    businesId: number;
}
