import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBusineDto {
  @IsString()
  name: string;

  @IsString()
  logo: string;

  @IsString()
  type: string;

  @IsNumber()
  @IsOptional()
  userId: number;
}
