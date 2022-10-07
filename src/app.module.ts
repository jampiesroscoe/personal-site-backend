import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { CurriculumVitaeModule } from './curriculum-vitae/curriculum-vitae.module';
import { SpacePicsModule } from './space-pics/space-pics.module';

@Module({
  imports: [
    CurriculumVitaeModule,
    MongooseModule.forRoot(
      'mongodb+srv://RoscoePersonalSite:Tqbfjotld2022@cluster0.014fu.mongodb.net/RoscoePersonalSite?retryWrites=true&w=majority',
    ),
    SpacePicsModule,
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
