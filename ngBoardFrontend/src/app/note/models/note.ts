import { NoteCoords } from './note-coords';

export class Note {
    constructor(public text: string = '', public author: string = '<anonymous>', public coords: NoteCoords = undefined) { }
}
