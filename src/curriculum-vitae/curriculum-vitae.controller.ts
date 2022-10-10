import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { CurriculumVitaeService } from './curriculum-vitae.service';
import { CreateCurriculumVitaeDto } from './dto/create-curriculum-vitae.dto';
import { UpdateCurriculumVitaeDto } from './dto/update-curriculum-vitae.dto';

@Controller('curriculum-vitae')
export class CurriculumVitaeController {
  constructor(
    private readonly curriculumVitaeService: CurriculumVitaeService,
  ) {}

  @Post()
  create(@Body() createCurriculumVitaeDto: CreateCurriculumVitaeDto) {
    return this.curriculumVitaeService.create(createCurriculumVitaeDto);
  }

  @Get()
  async findAll() {
    const result = await this.curriculumVitaeService.findAll();
    return result;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCurriculumVitaeDto: UpdateCurriculumVitaeDto,
  ) {
    return this.curriculumVitaeService.update(+id, updateCurriculumVitaeDto);
  }
}
