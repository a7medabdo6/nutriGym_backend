import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BusinesTypeService } from './busines-type.service';
import { CreateBusinesTypeDto } from './dto/create-busines-type.dto';
import { UpdateBusinesTypeDto } from './dto/update-busines-type.dto';

@Controller('busines-type')
export class BusinesTypeController {
  constructor(private readonly businesTypeService: BusinesTypeService) {}

  @Post()
  create(@Body() createBusinesTypeDto: CreateBusinesTypeDto) {
    return this.businesTypeService.create(createBusinesTypeDto);
  }

  @Get()
  findAll() {
    return this.businesTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businesTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusinesTypeDto: UpdateBusinesTypeDto) {
    return this.businesTypeService.update(+id, updateBusinesTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businesTypeService.remove(+id);
  }
}
