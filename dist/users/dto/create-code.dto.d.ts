export declare enum UserRole {
    superadmin = "superadmin",
    user = "user",
    admin = "admin"
}
export declare class CreateCodeDto {
    email: string;
    type: UserRole;
}
