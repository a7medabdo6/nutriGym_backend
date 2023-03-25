import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRole } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateBusineDto } from './dto/create-busine.dto';
import { UpdateBusineDto } from './dto/update-busine.dto';
import { Busine } from './entities/busine.entity';

@Injectable()
export class BusinesService {
  constructor(@InjectRepository(Busine) private repo: Repository<Busine>) {}

  create(createBusineDto: CreateBusineDto) {
    const busines = this.repo.create(createBusineDto);

    return this.repo.save(busines);
  }

  findAll() {
    return `This action returns all busines`;
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  update(id: number, updateBusineDto: UpdateBusineDto) {
    return `This action updates a #${id} busine`;
  }

  remove(id: number) {
    return `This action removes a #${id} busine`;
  }
}
