import { IsString } from "class-validator";

export class CreateBusineDto {
    @IsString()
    name:string

    @IsString()
    logo:string

    @IsString()
    type:string
}
