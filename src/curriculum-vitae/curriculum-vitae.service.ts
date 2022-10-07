import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { curriculumVitae, CVDocument } from './schemas/curriculum-vitae.schema';
import { Model } from 'mongoose';
import { CreateCurriculumVitaeDto } from './dto/create-curriculum-vitae.dto';
import { UpdateCurriculumVitaeDto } from './dto/update-curriculum-vitae.dto';

@Injectable()
export class CurriculumVitaeService {
  constructor(
    @InjectModel(curriculumVitae.name) private CVModel: Model<CVDocument>,
  ) {}

  async create(
    createCurriculumVitaeDto: CreateCurriculumVitaeDto,
  ): Promise<curriculumVitae> {
    const createdCV = new this.CVModel(createCurriculumVitaeDto);
    return createdCV.save();
  }

  async findAll(): Promise<curriculumVitae[]> {
    return await this.CVModel.find().exec();
  }

  async update(id: number, updateCurriculumVitaeDto: UpdateCurriculumVitaeDto) {
    return (
      `This action updates a #${id} curriculumVitae` + updateCurriculumVitaeDto
    );
  }
}
