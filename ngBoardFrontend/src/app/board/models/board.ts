import { Note } from '../../note/models/note';

export class Board {
    private id: number;
    private title: string;
    private notes: Note[];
    private creator: string;

    constructor(id: number, title: string, creator: string) {
        this.id = id;
        this.title = title;
        this.creator = creator;
    }

    set Notes(notes: Note[]) {
        this.notes = notes;
    }

    get Notes() {
        return this.notes;
    }

    get Id() {
        return this.id;
    }

    get Title() {
        return this.title;
    }
}
