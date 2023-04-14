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
import { UsersService } from 'src/users/users.service';
import { BusinesService } from './busines.service';
import { CreateBusineDto } from './dto/create-busine.dto';
import { UpdateBusineDto } from './dto/update-busine.dto';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { CurrentUserInterceptor } from 'src/users/interceptors/current-user.interceptor';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('busines')
@UseGuards(AuthGuard)
@UseInterceptors(CurrentUserInterceptor)
export class BusinesController {
  constructor(
    private readonly businesService: BusinesService,
    private readonly userService: UsersService,
  ) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('logo', {
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
    @Body() createBusineDto: CreateBusineDto,
  ) {
    console.log(file, 'fileee');
    if (!file) {
      throw new BadRequestException(' please Add Logo');
    }
    const User = await this.userService.findOne(+createBusineDto.userId);

    const res = await this.businesService.create({
      ...createBusineDto,
      logo: file.filename,
    });
    return this.businesService.update(res.id, {}, User);
  }

  @Get()
  findAll(@CurrentUser() user: unknown) {
    console.log(user);
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
    console.log(updateBusineDto, 'user');

    const User = await this.userService.findOne(+updateBusineDto.userId);
    return this.businesService.update(+id, updateBusineDto, User);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businesService.remove(+id);
  }
}
