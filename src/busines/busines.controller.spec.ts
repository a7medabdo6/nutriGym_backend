import { Test, TestingModule } from '@nestjs/testing';
import { BusinesController } from './busines.controller';
import { BusinesService } from './busines.service';

describe('BusinesController', () => {
  let controller: BusinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinesController],
      providers: [BusinesService],
    }).compile();

    controller = module.get<BusinesController>(BusinesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
