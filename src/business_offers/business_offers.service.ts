import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBusinessOfferDto } from './dto/create-business_offer.dto';
import { UpdateBusinessOfferDto } from './dto/update-business_offer.dto';
import { Busine } from 'src/busines/entities/busine.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessOffer } from './entities/business_offer.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class BusinessOffersService {
  constructor(
    @InjectRepository(BusinessOffer) private repo: Repository<BusinessOffer>,
  ) {}

  create(createBusinessOfferDto: CreateBusinessOfferDto, busines: Busine) {
    const BusinesOffers = this.repo.create(createBusinessOfferDto);
    BusinesOffers.busines = busines;

    return this.repo.save(BusinesOffers);
  }

  async findAll(ids: number[], role: string) {
    console.log(ids);
    const [businesoffer, businesOfferCount] = await this.repo.findAndCount({
      ...(role != 'superadmin' && { where: { busines: { id: In(ids) } } }),
      relations: { busines: true },
    });
    return { businesoffer, businesOfferCount };
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  update(id: number, updateBusinessOfferDto: UpdateBusinessOfferDto) {
    return `This action updates a #${id} businessOffer`;
  }

  async remove(id: number) {
    const offer = await this.repo.findOne({ where: { id } });
    if (!offer) {
      throw new NotFoundException('Busines Offer not found');
    }
    return this.repo.remove(offer);
  }
}
