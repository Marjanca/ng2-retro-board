export class Note {
    constructor(
        public id,
        public text = '',
        public author = '<anonymous>',
        public top: number,
        public left: number,
        public zIndex: number) {}

    getId = () => this.id;
}
