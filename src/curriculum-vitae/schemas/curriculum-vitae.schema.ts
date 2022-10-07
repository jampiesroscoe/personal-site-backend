import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CVDocument = curriculumVitae & Document;

@Schema()
export class curriculumVitae {
  @Prop()
  name: string;

  @Prop()
  currentRole: string;

  @Prop()
  address: string;

  @Prop()
  personalInfo: string;

  @Prop()
  education: string;

  @Prop()
  skills: string;

  @Prop()
  experience: string;

  @Prop()
  references: string;
}

export const CVSchema = SchemaFactory.createForClass(curriculumVitae);
