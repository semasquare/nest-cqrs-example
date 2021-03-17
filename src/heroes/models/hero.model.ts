import { AggregateRoot } from "@nestjs/cqrs";

import { HeroFoundItemEvent } from "../events/impl/hero-found-item.event";
import { HeroKilledDragonEvent } from "../events/impl/hero-killed-dragon.event";

export class Hero extends AggregateRoot {
    public constructor(private readonly id: string) {
        super();
    }

    public killEnemy(enemyId: string): void {
        // logic
        this.apply(new HeroKilledDragonEvent(this.id, enemyId));
    }

    public addItem(itemId: string): void {
        // logic
        this.apply(new HeroFoundItemEvent(this.id, itemId));
    }
}
