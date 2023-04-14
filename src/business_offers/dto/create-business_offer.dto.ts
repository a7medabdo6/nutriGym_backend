import { IsOptional, IsString } from 'class-validator';
import { Busine } from 'src/busines/entities/busine.entity';

export class CreateBusinessOfferDto {
  @IsString()
  name: string;

  @IsString()
  price: string;

  @IsString()
  duration: string;

  @IsString()
  desc: string;

  @IsOptional()
  photo: string;

  @IsString()
  extra: string;

  @IsOptional()
  busines: Busine;
}
