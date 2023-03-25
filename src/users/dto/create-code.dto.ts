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
export class CreateCodeDto {
  @IsEmail()
  email: string;

  @IsEnum(UserRole)
  type: UserRole;
}
