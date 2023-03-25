import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BusinessOffersService } from './business_offers.service';
import { CreateBusinessOfferDto } from './dto/create-business_offer.dto';
import { UpdateBusinessOfferDto } from './dto/update-business_offer.dto';

@Controller('business-offers')
export class BusinessOffersController {
  constructor(private readonly businessOffersService: BusinessOffersService) {}

  @Post()
  create(@Body() createBusinessOfferDto: CreateBusinessOfferDto) {
    return this.businessOffersService.create(createBusinessOfferDto);
  }

  @Get()
  findAll() {
    return this.businessOffersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessOffersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusinessOfferDto: UpdateBusinessOfferDto) {
    return this.businessOffersService.update(+id, updateBusinessOfferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessOffersService.remove(+id);
  }
}
