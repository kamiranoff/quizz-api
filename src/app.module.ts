import { Module } from '@nestjs/common';
import { Routes, RouterModule } from 'nest-router';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsModule } from './questions/questions.module';

const routes: Routes = [
  {
    path: '/api/v1',
    children: [QuestionsModule],
  },
];

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/quizz'),
    RouterModule.forRoutes(routes),
    QuestionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
