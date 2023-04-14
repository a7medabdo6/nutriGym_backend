import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBusineDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  logo: string;

  @IsString()
  type: string;

  // @IsNumber()
  @IsOptional()
  userId: string;
}
