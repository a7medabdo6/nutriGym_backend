import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Session,
  UseInterceptors,
  Query,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
// import { I18n, I18nContext } from 'nestjs-i18n';
import { ApiProperty } from '@nestjs/swagger';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dto/user.dto';
import { AuthService } from 'src/auth/auth.service';
import { get } from 'http';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { User } from './entities/user.entity';
import { CurrentUserInterceptor } from '../users/interceptors/current-user.interceptor';
import { AuthGuard } from 'src/guards/auth.guard';
import { CreateCodeDto } from './dto/create-code.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { BusinessOffersService } from 'src/business_offers/business_offers.service';
@Controller('users')
// @Serialize(UserDto)
// @UseInterceptors(CurrentUserInterceptor)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService, // private offerService: BusinessOffersService,
  ) {}

  // @Get('/whoami')
  // @UseGuards(AuthGuard)
  // whoami(@CurrentUser() user: unknown) {
  //   return user;
  // }
  // @Get('/trans')
  // async getHello(@I18n() i18n: I18nContext) {
  //   return await i18n.t('test.HELLO');
  // }

  @Post('/signup')
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
  async signup(
    @UploadedFile() file: Express.Multer.File,
    @Body() createUserDto: CreateUserDto,
  ) {
    // if (!file) {
    //   throw new BadRequestException(' please upload  photo');
    // }
    const user = await this.authService.signup({
      ...createUserDto,
      photo: file?.filename,
    });
    // session.userId = user.id;
    return user;
  }
  @Post('/signin')
  async signin(@Body() createUserDto: any) {
    const user = await this.authService.signin(createUserDto);
    return user;
  }
  @Post('/signout')
  async signout(@Session() session: any) {
    session.userId = null;
    return 'ok';
  }
  /*************************************************** */
  @Get('all-users/:id')
  findAll(@Param('id') id: number) {
    return this.usersService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }
  // @Serialize(UserCountryDto)
  // @Get(':id/all-flights')
  // getAllFlight(@Param('id') id: string) {
  //   return this.usersService.getAllFlight(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  // @Post(':id/flight')
  // async flight(@Param('id') id: number, @Body() body: { ids: [] }) {
  //   console.log(body.ids, 'ids');
  //   const flights = await this.flightService.findAllByIds(body?.ids);
  //   return this.usersService.AssignFlights(id, flights);
  // }
  // @Post(':id/country')
  // async country(@Param('id') id: number, @Body() body: { ids: [] }) {
  //   console.log(body.ids, 'ids');
  //   const countries = await this.countryService.findAllByIds(body?.ids);
  //   return this.usersService.AssignCountries(id, countries);
  // }
  // @Get(':id/all-countries')
  // getAllCountries(@Param('id') id: string) {
  //   return this.usersService.getAllCountries(+id);
  // }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
