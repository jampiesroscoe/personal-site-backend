import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CurriculumVitaeService } from './curriculum-vitae.service';
import { CurriculumVitaeController } from './curriculum-vitae.controller';
import { curriculumVitae, CVSchema } from './schemas/curriculum-vitae.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: curriculumVitae.name, schema: CVSchema },
    ]),
  ],
  controllers: [CurriculumVitaeController],
  providers: [CurriculumVitaeService],
})
export class CurriculumVitaeModule {}
