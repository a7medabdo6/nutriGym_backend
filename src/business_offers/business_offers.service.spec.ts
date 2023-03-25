import { Test, TestingModule } from '@nestjs/testing';
import { BusinessOffersService } from './business_offers.service';

describe('BusinessOffersService', () => {
  let service: BusinessOffersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinessOffersService],
    }).compile();

    service = module.get<BusinessOffersService>(BusinessOffersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
