export class HeroKilledDragonEvent {
    public constructor(
        public readonly heroId: string,
        public readonly dragonId: string,
    ) {}
}
