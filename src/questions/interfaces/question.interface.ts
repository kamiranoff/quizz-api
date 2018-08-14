export interface IOption {
  id: number;
  option: string;
}

export interface IQuestion {
  question: string;
  pictureUrl: string;
  options: IOption[];
  answer: number;
}
