import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export enum UserRole {
  superadmin = 'superadmin',
  user = 'user',
  admin = 'admin',
}

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  username: string;
  // @IsString()
  // phone: string;

  @IsEnum(UserRole)
  role: UserRole;
  @IsOptional()
  businesId: number;
}
