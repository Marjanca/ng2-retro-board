import { Note } from '../../note/models/note';

export class Board {
    private notes: Note[];

    constructor(
        private id: number,
        private title: string,
        private creator: string) { }

    get Notes(): Note[] {
        return this.notes;
    }
    set Notes(notes: Note[]) {
        this.notes = notes;
    }

    get Id(): number {
        return this.id;
    }
    set Id(id: number) {
        this.id = id;
    }

    get Title(): string {
        return this.title;
    }
    set Title(title: string) {
        this.title = title;
    }
}
