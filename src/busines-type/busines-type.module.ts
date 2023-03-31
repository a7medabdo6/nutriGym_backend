import { Module } from '@nestjs/common';
import { BusinesTypeService } from './busines-type.service';
import { BusinesTypeController } from './busines-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinesType } from './entities/busines-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BusinesType])],

  controllers: [BusinesTypeController],
  providers: [BusinesTypeService],
})
export class BusinesTypeModule {}
