import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { BusinesService } from './busines.service';
import { CreateBusineDto } from './dto/create-busine.dto';
import { UpdateBusineDto } from './dto/update-busine.dto';

@Controller('busines')
export class BusinesController {
  constructor(
    private readonly businesService: BusinesService,
    private readonly userService: UsersService,
  ) {}

  @Post()
  create(@Body() createBusineDto: CreateBusineDto) {
    return this.businesService.create(createBusineDto);
  }

  @Get()
  findAll() {
    return this.businesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businesService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBusineDto: UpdateBusineDto,
  ) {
    const User = await this.userService.findOne(updateBusineDto.userId);

    return this.businesService.update(+id, updateBusineDto, User);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businesService.remove(+id);
  }
}
