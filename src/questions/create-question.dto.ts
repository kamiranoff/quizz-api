export class CreateQuestionDto {
  readonly pictureUrl: string;
  readonly question: string;
  readonly answer: number;
  readonly options: {
    option: string;
    id: number;
  };
}
