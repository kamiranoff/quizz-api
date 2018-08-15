import { Schema } from 'mongoose';

export const QuestionSchema = new Schema({
  question: String,
  pictureUrl: String,
  options: [{
    option: String,
    id: Number,
    _id: false
  }],
  answer: Number,
});
