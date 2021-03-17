import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";

import { KillDragonCommand } from "./commands/impl/kill-dragon.command";
import { KillDragonDto } from "./interfaces/kill-dragon-dto.interface";
import { Hero } from "./models/hero.model";
import { GetHeroesQuery } from "./queries/impl";

@Controller("hero")
export class HeroesGameController {
    public constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {}

    @Post(":id/kill")
    public async killDragon(
        @Param("id") id: string,
        @Body() dto: KillDragonDto,
    ): Promise<any> {
        return this.commandBus.execute(new KillDragonCommand(id, dto.dragonId));
    }

    @Get()
    public async findAll(): Promise<Hero[]> {
        return this.queryBus.execute(new GetHeroesQuery());
    }
}
