import { Test, TestingModule } from '@nestjs/testing';
import { BusinesAboutService } from './busines-about.service';

describe('BusinesAboutService', () => {
  let service: BusinesAboutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinesAboutService],
    }).compile();

    service = module.get<BusinesAboutService>(BusinesAboutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
