import { Controller, Get } from '@nestjs/common';
import { SpacePicsService } from './space-pics.service';

@Controller('space-pics')
export class SpacePicsController {
  constructor(private readonly spacePicsService: SpacePicsService) {}

  @Get()
  getSpacePics() {
    return this.spacePicsService.getSpacePics();
  }
}
