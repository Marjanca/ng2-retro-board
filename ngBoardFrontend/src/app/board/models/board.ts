import { Note } from '../../note/models/note';

export class Board {
    private notes: Note[];

    constructor(
        private id: number,
        private title: string,
        private creator: string) {}

    setNotes(notes: Note[]) {
        this.notes = notes;
    }

    getNotes = () => this.notes;

    getId = () => this.id;

    getTitle = () => this.title;
}
