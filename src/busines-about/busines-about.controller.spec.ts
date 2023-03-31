import { Test, TestingModule } from '@nestjs/testing';
import { BusinesAboutController } from './busines-about.controller';
import { BusinesAboutService } from './busines-about.service';

describe('BusinesAboutController', () => {
  let controller: BusinesAboutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinesAboutController],
      providers: [BusinesAboutService],
    }).compile();

    controller = module.get<BusinesAboutController>(BusinesAboutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
