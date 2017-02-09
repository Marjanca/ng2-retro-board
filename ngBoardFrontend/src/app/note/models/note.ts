export class Note {
    constructor(
        private id,
        private boardId,
        private text = '',
        private author = '<anonymous>',
        private top: number,
        private left: number,
        private zIndex: number) {}

    get Id(): number {
        return this.id;
    }
    set Id(id: number) {
        this.id = id;
    }

    get BoardId(): number {
        return this.boardId;
    }
    set BoardId(boardId: number) {
        this.boardId = boardId;
    }

    get Text(): string {
        return this.text;
    }
    set Text(text: string) {
        this.text = text;
    }

    get Author(): string {
        return this.author;
    }
    set Author(author: string) {
        this.author = author;
    }

    get Top(): number {
        return this.top;
    }
    set Top(top: number) {
        this.top = top;
    }

    get Left(): number {
        return this.left;
    }
    set Left(left: number) {
        this.left = left;
    }

    get ZIndex(): number {
        return this.zIndex;
    }
    set ZIndex(zIndex: number) {
        this.zIndex = zIndex;
    }
}
