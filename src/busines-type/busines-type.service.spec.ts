import { Test, TestingModule } from '@nestjs/testing';
import { BusinesTypeService } from './busines-type.service';

describe('BusinesTypeService', () => {
  let service: BusinesTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinesTypeService],
    }).compile();

    service = module.get<BusinesTypeService>(BusinesTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
