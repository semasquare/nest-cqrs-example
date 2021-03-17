export class HeroFoundItemEvent {
    public constructor(
        public readonly heroId: string,
        public readonly itemId: string,
    ) {}
}
