import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BusinesAboutService } from './busines-about.service';
import { CreateBusinesAboutDto } from './dto/create-busines-about.dto';
import { UpdateBusinesAboutDto } from './dto/update-busines-about.dto';

@Controller('busines-about')
export class BusinesAboutController {
  constructor(private readonly businesAboutService: BusinesAboutService) {}

  @Post()
  create(@Body() createBusinesAboutDto: CreateBusinesAboutDto) {
    return this.businesAboutService.create(createBusinesAboutDto);
  }

  @Get()
  findAll() {
    return this.businesAboutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businesAboutService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusinesAboutDto: UpdateBusinesAboutDto) {
    return this.businesAboutService.update(+id, updateBusinesAboutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businesAboutService.remove(+id);
  }
}
