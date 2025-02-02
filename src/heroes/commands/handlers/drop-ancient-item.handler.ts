import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import * as clc from "cli-color";

import { HeroRepository } from "../../repository/hero.repository";
import { DropAncientItemCommand } from "../impl/drop-ancient-item.command";

@CommandHandler(DropAncientItemCommand)
export class DropAncientItemHandler
    implements ICommandHandler<DropAncientItemCommand> {
    public constructor(
        private readonly repository: HeroRepository,
        private readonly publisher: EventPublisher,
    ) {}

    public async execute(command: DropAncientItemCommand): Promise<void> {
        console.log(clc.yellowBright("Async DropAncientItemCommand..."));

        const { heroId, itemId } = command;
        const hero = this.publisher.mergeObjectContext(
            await this.repository.findOneById(+heroId),
        );
        hero.addItem(itemId);
        hero.commit();
    }
}
