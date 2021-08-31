export class Driver {
    constructor(
        public fullName: string,
        public coverImage: string,
        public pays?: string|null,
        public category?: string|null,
        public likeIts: number = 0) { }

}