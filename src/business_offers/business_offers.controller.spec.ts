import { Test, TestingModule } from '@nestjs/testing';
import { BusinessOffersController } from './business_offers.controller';
import { BusinessOffersService } from './business_offers.service';

describe('BusinessOffersController', () => {
  let controller: BusinessOffersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessOffersController],
      providers: [BusinessOffersService],
    }).compile();

    controller = module.get<BusinessOffersController>(BusinessOffersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
