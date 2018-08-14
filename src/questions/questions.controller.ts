import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {

  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  async create(@Body() createQuestionDto) {
    return await  this.questionsService.create(createQuestionDto);
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.questionsService.findAll();
  }
}