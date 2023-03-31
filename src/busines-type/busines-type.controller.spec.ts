import { Test, TestingModule } from '@nestjs/testing';
import { BusinesTypeController } from './busines-type.controller';
import { BusinesTypeService } from './busines-type.service';

describe('BusinesTypeController', () => {
  let controller: BusinesTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinesTypeController],
      providers: [BusinesTypeService],
    }).compile();

    controller = module.get<BusinesTypeController>(BusinesTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
