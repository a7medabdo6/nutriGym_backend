import { forwardRef, Module } from '@nestjs/common';
import { BusinesService } from './busines.service';
import { BusinesController } from './busines.controller';
import { Busine } from './entities/busine.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Busine]), forwardRef(() => UsersModule)],

  controllers: [BusinesController],
  providers: [BusinesService],
  exports: [BusinesService],
})
export class BusinesModule {}
