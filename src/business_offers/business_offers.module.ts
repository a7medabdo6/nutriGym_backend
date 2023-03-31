import { Module } from '@nestjs/common';
import { BusinessOffersService } from './business_offers.service';
import { BusinessOffersController } from './business_offers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessOffer } from './entities/business_offer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BusinessOffer])],

  controllers: [BusinessOffersController],
  providers: [BusinessOffersService]
})
export class BusinessOffersModule {}
