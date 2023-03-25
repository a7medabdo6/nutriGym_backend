import { Test, TestingModule } from '@nestjs/testing';
import { BusinesService } from './busines.service';

describe('BusinesService', () => {
  let service: BusinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinesService],
    }).compile();

    service = module.get<BusinesService>(BusinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
