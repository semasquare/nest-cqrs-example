import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import * as clc from "cli-color";

import { Hero } from "../../models/hero.model";
import { HeroRepository } from "../../repository/hero.repository";
import { GetHeroesQuery } from "../impl";

@QueryHandler(GetHeroesQuery)
export class GetHeroesHandler implements IQueryHandler<GetHeroesQuery> {
    public constructor(private readonly repository: HeroRepository) {}

    public async execute(query: GetHeroesQuery): Promise<Hero[]> {
        console.log(clc.yellowBright("Async GetHeroesQuery..."));
        return this.repository.findAll();
    }
}
