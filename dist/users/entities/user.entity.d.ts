import { Busine } from 'src/busines/entities/busine.entity';
import { BusinessOffer } from 'src/business_offers/entities/business_offer.entity';
import { BaseEntity } from 'typeorm';
export declare enum UserRole {
    superadmin = "superadmin",
    user = "user",
    admin = "admin"
}
export declare class User extends BaseEntity {
    id: number;
    email: string;
    phone: string;
    photo: string;
    password: string;
    offerId: number;
    username: string;
    role: UserRole;
    busines?: Busine[];
    busines_offers?: BusinessOffer[];
}
