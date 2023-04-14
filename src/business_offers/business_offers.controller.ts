import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { BusinessOffersService } from './business_offers.service';
import { CreateBusinessOfferDto } from './dto/create-business_offer.dto';
import { UpdateBusinessOfferDto } from './dto/update-business_offer.dto';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { BusinesService } from 'src/busines/busines.service';
import { UsersService } from 'src/users/users.service';

@Controller('business-offers')
export class BusinessOffersController {
  constructor(
    private readonly businessOffersService: BusinessOffersService,
    private readonly BusinesService: BusinesService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, uniqueSuffix + extname(file.originalname));
        },
      }),
      fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
          return callback(new Error('Only image files are allowed!'), false);
        }
        callback(null, true);
      },
      limits: {
        fileSize: 1024 * 1024, // 1 MB
      },
    }),
  )
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createBusinessOfferDto: CreateBusinessOfferDto,
  ) {
    if (!file) {
      throw new BadRequestException(' please Add photo');
    }
    const busines = await this.BusinesService.findOne(
      +createBusinessOfferDto.busines,
    );

    return this.businessOffersService.create(
      { ...createBusinessOfferDto, photo: file.filename },
      busines,
    );
  }

  @Get(':id')
  async findAll(@Param('id') id: number) {
    const user = await this.usersService.findOne(id);
    let ids = [];
    console.log(user, 'user');
    for (let index = 0; index < user?.busines?.length; index++) {
      ids.push(user.busines[index].id);
    }
    return this.businessOffersService.findAll(ids, user.role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessOffersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBusinessOfferDto: UpdateBusinessOfferDto,
  ) {
    return this.businessOffersService.update(+id, updateBusinessOfferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessOffersService.remove(+id);
  }
}
