import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { BusinesTypeService } from './busines-type.service';
import { CreateBusinesTypeDto } from './dto/create-busines-type.dto';
import { UpdateBusinesTypeDto } from './dto/update-busines-type.dto';

@Controller('busines-type')
export class BusinesTypeController {
  constructor(private readonly businesTypeService: BusinesTypeService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('cover', {
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
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createBusinesTypeDto: CreateBusinesTypeDto,
  ) {
    console.log(file, 'fileee');
    return this.businesTypeService.create(createBusinesTypeDto);
  }

  // async createItem(@UploadedFile() file: Express.Multer.File, @Body() createItemDto: CreateItemDto) {
  //   // do something with the file and createItemDto
  // }

  @Get()
  findAll() {
    return this.businesTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businesTypeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBusinesTypeDto: UpdateBusinesTypeDto,
  ) {
    return this.businesTypeService.update(+id, updateBusinesTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businesTypeService.remove(+id);
  }
}
