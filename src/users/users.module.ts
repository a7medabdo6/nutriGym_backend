import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AuthService } from 'src/auth/auth.service';
import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';
import { BusinesModule } from 'src/busines/busines.module';
import { BusinesService } from 'src/busines/busines.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), BusinesModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    AuthService,
    CurrentUserInterceptor,
  ],
  exports: [UsersService],
})
export class UsersModule {}
