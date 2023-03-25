import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BusinesService } from './busines.service';
import { CreateBusineDto } from './dto/create-busine.dto';
import { UpdateBusineDto } from './dto/update-busine.dto';

@Controller('busines')
export class BusinesController {
  constructor(private readonly businesService: BusinesService) {}

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
  update(@Param('id') id: string, @Body() updateBusineDto: UpdateBusineDto) {
    return this.businesService.update(+id, updateBusineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businesService.remove(+id);
  }
}
