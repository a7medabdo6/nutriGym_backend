import { IsString } from 'class-validator';

export class CreateBusinesTypeDto {
  @IsString()
  title: string;

  @IsString()
  desc: string;
}
