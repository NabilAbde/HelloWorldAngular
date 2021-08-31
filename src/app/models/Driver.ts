export class Driver {
    constructor(
        public fullName: string,
        public coverImage: string,
        public pays: string,
        public category?: string,
        public likeIts: number = 0) { }

}