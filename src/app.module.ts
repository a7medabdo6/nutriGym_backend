import { Module } from '@nestjs/common';
import * as path from 'path';
// import {
//   AcceptLanguageResolver,
//   I18nJsonLoader,
//   I18nModule,
//   QueryResolver,
// } from 'nestjs-i18n';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User, UserRole } from './users/entities/user.entity';
import { BusinesModule } from './busines/busines.module';
import { Busine } from './busines/entities/busine.entity';
import { BusinessOffersModule } from './business_offers/business_offers.module';
import { BusinesTypeModule } from './busines-type/busines-type.module';
import { BusinesType } from './busines-type/entities/busines-type.entity';
import { BusinessOffer } from './business_offers/entities/business_offer.entity';
import { BusinesAboutModule } from './busines-about/busines-about.module';
import { ReviewModule } from './review/review.module';

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
};

@Module({
  imports: [
    // I18nModule.forRoot({
    //   fallbackLanguage: 'en',
    //   loaderOptions: {
    //     path: './src/i18n/',
    //     watch: true,
    //   },
    //   resolvers: [
    //     { use: QueryResolver, options: ['lang'] },
    //     AcceptLanguageResolver,
    //   ],
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db-mysql-fra1-74306-do-user-13515466-0.b.db.ondigitalocean.com',
      port: 25060,
      username: 'doadmin',
      password: 'AVNS_u3pK56W_yl4RNRockJU ',
      database: 'defaultdb',

      // username: 'root',
      // port: 3306,
      // host: 'localhost',
      // database: 'nutrigym',
      // password: '',

      entities: [
        User,
        Busine,
        BusinesType,
        BusinessOffer,
        // Docs,
        // Flight,
        // Seat,
        // SeatToSeat,
        // Supplier,
        // FlightCompany,
        // Country,
        // City,
        // DapartureAirport,
      ],
      synchronize: true,
    }),
    UsersModule,
    BusinesModule,
    BusinessOffersModule,
    BusinesTypeModule,
    BusinesAboutModule,
    ReviewModule,
    // DocsModule,
    // FlightModule,
    // SeatModule,
    // SupplierModule,
    // FlightCompanyModule,
    // CountryModule,
    // CityModule,
    // DapartureAirportModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
