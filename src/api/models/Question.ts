import { Entity, ObjectIdColumn } from 'typeorm';

export interface IOption {
    option: string;
    id: number;
}

@Entity()
export class Question {
    @ObjectIdColumn()
    public id: string;
    public text: string;
    public pictureUrl: string;
    public options: IOption[];

    public toString(): string {
        return `${this.text}`;
    }

}
