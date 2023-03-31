import { BusinesType } from 'src/busines-type/entities/busines-type.entity';
import { BusinessOffer } from 'src/business_offers/entities/business_offer.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Busine {
    id: number;
    logo: string;
    name: string;
    type: string;
    user?: User[];
    busines_type: BusinesType;
    busines_offers: BusinessOffer;
}
