import { NoteCoords } from './note-coords';

export class Note {
    constructor(public text: string, public author: string, public coords?: NoteCoords) { }
}
