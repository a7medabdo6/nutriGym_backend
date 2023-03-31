import { Injectable } from '@nestjs/common';
import { CreateBusinesAboutDto } from './dto/create-busines-about.dto';
import { UpdateBusinesAboutDto } from './dto/update-busines-about.dto';

@Injectable()
export class BusinesAboutService {
  create(createBusinesAboutDto: CreateBusinesAboutDto) {
    return 'This action adds a new businesAbout';
  }

  findAll() {
    return `This action returns all businesAbout`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businesAbout`;
  }

  update(id: number, updateBusinesAboutDto: UpdateBusinesAboutDto) {
    return `This action updates a #${id} businesAbout`;
  }

  remove(id: number) {
    return `This action removes a #${id} businesAbout`;
  }
}
