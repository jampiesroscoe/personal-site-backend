import { Test, TestingModule } from '@nestjs/testing';
import { SpacePicsController } from './space-pics.controller';
import { SpacePicsService } from './space-pics.service';

describe('SpacePicsController', () => {
  let controller: SpacePicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpacePicsController],
      providers: [SpacePicsService],
    }).compile();

    controller = module.get<SpacePicsController>(SpacePicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
