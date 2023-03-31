import { Module } from '@nestjs/common';
import { BusinesAboutService } from './busines-about.service';
import { BusinesAboutController } from './busines-about.controller';

@Module({
  controllers: [BusinesAboutController],
  providers: [BusinesAboutService]
})
export class BusinesAboutModule {}
