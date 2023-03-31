import { Injectable } from '@nestjs/common';
import { CreateBusinesTypeDto } from './dto/create-busines-type.dto';
import { UpdateBusinesTypeDto } from './dto/update-busines-type.dto';

@Injectable()
export class BusinesTypeService {
  create(createBusinesTypeDto: CreateBusinesTypeDto) {
    return 'This action adds a new businesType';
  }

  findAll() {
    return `This action returns all businesType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businesType`;
  }

  update(id: number, updateBusinesTypeDto: UpdateBusinesTypeDto) {
    return `This action updates a #${id} businesType`;
  }

  remove(id: number) {
    return `This action removes a #${id} businesType`;
  }
}
