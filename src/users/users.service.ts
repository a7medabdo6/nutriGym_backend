import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinesService } from 'src/busines/busines.service';
import { Any, In, Not, Repository } from 'typeorm';
import { CreateCodeDto } from './dto/create-code.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { BusinessOffersService } from 'src/business_offers/business_offers.service';

export enum UserRole {
  superadmin = 'superadmin',
  user = 'user',
  admin = 'admin',
}
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private repo: Repository<User>,
    private readonly BusinesService: BusinesService,
    private offerService: BusinessOffersService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = this.repo.create(createUserDto);
    const busines = this.BusinesService.findOne(createUserDto.businesId);
    const offer = await this.offerService.findOne(createUserDto.offer);

    user.busines_offers = [offer];
    return this.repo.save(user);
  }

  // async create(UpdateUser: UpdateUserDto) {
  //   const user = await this.repo.findOne({
  //     where: {
  //       email: UpdateUser.email,
  //     },
  //   });
  //   if (!user) {
  //     Object.assign(user, UpdateUser);
  //     return this.repo.save(user);
  //   }
  //   throw new NotFoundException('user  found please call admin for more info');
  // }
  createcode(CreateCodeDto: CreateCodeDto) {
    const user = this.repo.create(CreateCodeDto);
    return this.repo.save(user);
  }
  // console.log(ids);
  // const [businesoffer, businesOfferCount] = await this.repo.findAndCount({
  //   ...(role != 'superadmin' && { where: { busines: { id: In(ids) } } }),
  //   relations: { busines: true },
  // });
  // return { businesoffer, businesOfferCount };

  async findAll(id: number) {
    const user = await this.findOne(id);

    let ids = [];
    // console.log(user, 'user');
    for (let index = 0; index < user?.busines?.length; index++) {
      ids.push(user.busines[index].id);
    }
    const [users, usersCount] = await this.repo.findAndCount({
      where: {
        role: Not(UserRole.superadmin),
        ...(user?.role != 'superadmin' && {
          busines_offers: { busines: { id: In(ids) } },
        }),
      },
    });

    return { users, usersCount };
  }

  async findOne(id: number) {
    console.log(id, 'id');
    if (!id) {
      throw new UnauthorizedException('unAuthorized');
    }
    const user = await this.repo.findOne({
      where: { id },
      relations: { busines: true },
    });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }
  async findOneByEmail(email: string) {
    const user = await this.repo.findOne({
      where: { email },
      relations: {
        busines: true,
      },
    });

    return user;
  }
  async update(id: number, updateUser: Partial<User>) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, updateUser);
    return this.repo.save(user);
  }
  // async AssignFlights(id: number, Flight: Flight[]) {
  //   const user = await this.repo.findOne({
  //     where: { id },
  //     relations: { flight: true },
  //   });
  //   if (!user) {
  //     throw new NotFoundException('user not found');
  //   }
  //   // Object.assign(user, Flight);
  //   user.flight = Flight;
  //   return this.repo.save(user);
  // }
  // async AssignCountries(id: number, country: Country[]) {
  //   const user = await this.repo.findOne({
  //     where: { id },
  //     relations: { country: true },
  //   });
  //   if (!user) {
  //     throw new NotFoundException('user not found');
  //   }
  //   // Object.assign(user, Flight);
  //   user.country = country;
  //   return this.repo.save(user);
  // }
  // async getAllFlight(id: number) {
  //   const user = await this.repo.findOne({
  //     where: { id },
  //     relations: ['flight', 'flight.country', 'flight.city'],
  //   });
  //   if (!user) {
  //     throw new NotFoundException('user not found');
  //   }
  //   return user;
  // }
  // async getAllCountries(id: number) {
  //   const user = await this.repo.findOne({
  //     where: { id },
  //     relations: ['country', 'country.city'],
  //   });
  //   if (!user) {
  //     throw new NotFoundException('user not found');
  //   }
  //   return user;
  // }

  async remove(id: number) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }
}
