import { NoteCoords } from './note-coords';

export class Note {
    constructor(public text = '', public author = '<anonymous>', public coords: NoteCoords = undefined) { }
}
