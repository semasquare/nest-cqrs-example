import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import * as clc from "cli-color";

import { HeroRepository } from "../../repository/hero.repository";
import { KillDragonCommand } from "../impl/kill-dragon.command";

@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
    public constructor(
        private readonly repository: HeroRepository,
        private readonly publisher: EventPublisher,
    ) {}

    public async execute(command: KillDragonCommand): Promise<void> {
        console.log(clc.greenBright("KillDragonCommand..."));

        const { heroId, dragonId } = command;
        const hero = this.publisher.mergeObjectContext(
            await this.repository.findOneById(+heroId),
        );
        hero.killEnemy(dragonId);
        hero.commit();
    }
}
