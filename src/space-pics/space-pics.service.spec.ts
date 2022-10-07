import { Test, TestingModule } from '@nestjs/testing';
import { SpacePicsService } from './space-pics.service';

describe('SpacePicsService', () => {
  let service: SpacePicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpacePicsService],
    }).compile();

    service = module.get<SpacePicsService>(SpacePicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
