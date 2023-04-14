import { Busine } from 'src/busines/entities/busine.entity';
import { User } from 'src/users/entities/user.entity';
export declare class BusinessOffer {
    id: number;
    name: string;
    price: string;
    duration: string;
    desc: string;
    photo: string;
    extra: string;
    busines: Busine;
    user?: User[];
    length: number;
}
