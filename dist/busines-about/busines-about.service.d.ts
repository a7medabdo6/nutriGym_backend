import { CreateBusinesAboutDto } from './dto/create-busines-about.dto';
import { UpdateBusinesAboutDto } from './dto/update-busines-about.dto';
export declare class BusinesAboutService {
    create(createBusinesAboutDto: CreateBusinesAboutDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBusinesAboutDto: UpdateBusinesAboutDto): string;
    remove(id: number): string;
}
