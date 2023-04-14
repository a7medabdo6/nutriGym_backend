import { Module, forwardRef } from '@nestjs/common';
import { BusinessOffersService } from './business_offers.service';
import { BusinessOffersController } from './business_offers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessOffer } from './entities/business_offer.entity';
import { BusinesModule } from 'src/busines/busines.module';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([BusinessOffer]),
    BusinesModule,
    forwardRef(() => UsersModule),
  ],

  controllers: [BusinessOffersController],
  providers: [BusinessOffersService, AuthService],
  exports: [BusinessOffersService],
})
export class BusinessOffersModule {}
