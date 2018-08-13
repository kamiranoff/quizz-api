import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { EventDispatcher, EventDispatcherInterface } from '../../decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Question } from '../models/Question';
import { QuestionRepository } from '../repositories/QuestionRepository';
import { events } from '../subscribers/events';

@Service()
export class QuestionService {

    constructor(
        @OrmRepository() private questionRepository: QuestionRepository,
        @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(): Promise<Question[]> {
        this.log.info('Find all questions');
        return this.questionRepository.find();
    }

    public findOne(id: string): Promise<Question | undefined> {
        this.log.info('Find one question');
        return this.questionRepository.findOne({ id });
    }

    public async create(question: Question): Promise<Question> {
        this.log.info('Create a new question => ', question.toString());
        const newQuestion = await this.questionRepository.save(question);
        this.eventDispatcher.dispatch(events.question.created, newQuestion);
        return newQuestion;
    }

    public update(id: string, question: Question): Promise<Question> {
        this.log.info('Update a question');
        question.id = id;
        return this.questionRepository.save(question);
    }

    public async delete(id: string): Promise<void> {
        this.log.info('Delete a question');
        await this.questionRepository.delete(id);
        return;
    }

}
