import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IQuestion } from './interfaces/question.interface';
import { CreateQuestionDto } from './create-question.dto';

@Injectable()
export class QuestionsService {
  constructor(@InjectModel('Question') private readonly questionModel: Model<IQuestion>) {}

  async create(createQuestionDto: CreateQuestionDto): Promise<IQuestion> {
    const createdQuestion = new this.questionModel(createQuestionDto);
    return await createdQuestion.save();
  }

  async findAll(): Promise<IQuestion[]> {
    return await this.questionModel.find().exec();
  }
}