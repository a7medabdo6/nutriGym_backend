import { Injectable, NotFoundException } from '@nestjs/common';
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
    // busines.user = [User];

    return this.repo.save(busines);
  }

  async findAll() {
    const [busines, businesCount] = await this.repo.findAndCount({});
    return { busines, businesCount };
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async update(id: number, updateBusineDto: UpdateBusineDto, User: User) {
    const busines = await this.repo.findOne({ where: { id } });
    if (!busines) {
      throw new NotFoundException('busines not found');
    }
    Object.assign(busines, updateBusineDto);
    busines.user = [User];
    return this.repo.save(busines);
  }

  remove(id: number) {
    return `This action removes a #${id} busine`;
  }
}
