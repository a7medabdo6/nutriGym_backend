/// <reference types="multer" />
import { BusinessOffersService } from './business_offers.service';
import { CreateBusinessOfferDto } from './dto/create-business_offer.dto';
import { UpdateBusinessOfferDto } from './dto/update-business_offer.dto';
import { BusinesService } from 'src/busines/busines.service';
import { UsersService } from 'src/users/users.service';
export declare class BusinessOffersController {
    private readonly businessOffersService;
    private readonly BusinesService;
    private readonly usersService;
    constructor(businessOffersService: BusinessOffersService, BusinesService: BusinesService, usersService: UsersService);
    create(file: Express.Multer.File, createBusinessOfferDto: CreateBusinessOfferDto): Promise<import("./entities/business_offer.entity").BusinessOffer>;
    findAll(id: number): Promise<{
        businesoffer: import("./entities/business_offer.entity").BusinessOffer[];
        businesOfferCount: number;
    }>;
    findOne(id: string): Promise<import("./entities/business_offer.entity").BusinessOffer>;
    update(id: string, updateBusinessOfferDto: UpdateBusinessOfferDto): string;
    remove(id: string): Promise<import("./entities/business_offer.entity").BusinessOffer>;
}
