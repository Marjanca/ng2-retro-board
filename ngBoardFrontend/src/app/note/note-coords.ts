export class NoteCoords {

    public top: string;
    public left: string;
    public zIndex: number;

    constructor(top: number, left: number, zIndex: number) {
        this.top = top + 'px';
        this.left = left + 'px';
        this.zIndex = zIndex;
    }
}
