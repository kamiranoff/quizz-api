import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';
import { QuestionSchema } from './schemas/question.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Question', schema: QuestionSchema }])],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}