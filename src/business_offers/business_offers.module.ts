import { Module } from '@nestjs/common';
import { BusinessOffersService } from './business_offers.service';
import { BusinessOffersController } from './business_offers.controller';

@Module({
  controllers: [BusinessOffersController],
  providers: [BusinessOffersService]
})
export class BusinessOffersModule {}
