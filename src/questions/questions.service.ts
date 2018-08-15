import Mongoose, { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IQuestion } from './interfaces/question.interface';
import { CreateQuestionDto } from './create-question.dto';


export interface IQuestionModel extends Mongoose.Document, IQuestion {
}

@Injectable()
export class QuestionsService {
  constructor(@InjectModel('Question') private readonly questionModel: Model<IQuestionModel>) {
  }

  async create(createQuestionDto: CreateQuestionDto): Promise<IQuestionModel> {
    const createdQuestion = new this.questionModel(createQuestionDto);
    return await createdQuestion.save();
  }

  async findAll(): Promise<IQuestionModel[]> {
    return await this.questionModel.find().exec();
  }
}