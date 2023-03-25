import { Module } from '@nestjs/common';
import * as path from 'path';
import {
  AcceptLanguageResolver,
  I18nJsonLoader,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

import { BusinesModule } from './busines/busines.module';
import { Busine } from './busines/entities/busine.entity';
import { BusinessOffersModule } from './business_offers/business_offers.module';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: './src/i18n/',
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: 'db-mysql-sfo3-55643-do-user-9120615-0.b.db.ondigitalocean.com',
      // port: 25060,
      // username: 'doadmin',
      // password: 'AVNS_vPJjdBFePeawLu5rHmC',
      // database: 'defaultdb',

      username: 'root',
      port: 3306,
      host: 'localhost',
      database: 'nutrigym',
      password: '',

      entities: [
        User,
        Busine
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
