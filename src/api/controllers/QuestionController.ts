import {
     Body, Delete, Get, JsonController, Param, Post, Put
} from 'routing-controllers';
import { QuestionService } from '../services/QuestionService';
import { Question } from '../models/Question';

@JsonController('/questions')
export class QuestionController {

    constructor(
        private questionsService: QuestionService
    ) {
        console.log('IN THE CONSTRUCTOR');
    }

    @Get()
    public find(): Promise<Question[]> {
        return this.questionsService.find();
    }

    @Get('/:id')
    public one(@Param('id') id: string): Promise<Question | undefined> {
        return this.questionsService.findOne(id);
    }

    @Post()
    public create(@Body() user: Question): Promise<Question> {
        return this.questionsService.create(user);
    }

    @Put('/:id')
    public update(@Param('id') id: string, @Body() user: Question): Promise<Question> {
        return this.questionsService.update(id, user);
    }

    @Delete('/:id')
    public delete(@Param('id') id: string): Promise<void> {
        return this.questionsService.delete(id);
    }

}
