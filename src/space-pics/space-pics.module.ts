import { Module } from '@nestjs/common';
import { SpacePicsService } from './space-pics.service';
import { SpacePicsController } from './space-pics.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [SpacePicsController],
  providers: [SpacePicsService],
})
export class SpacePicsModule {}
