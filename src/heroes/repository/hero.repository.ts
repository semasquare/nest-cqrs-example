import { Injectable } from "@nestjs/common";

import { Hero } from "../models/hero.model";

import { userHero } from "./fixtures/user";

@Injectable()
export class HeroRepository {
    public async findOneById(id: number): Promise<Hero> {
        return Promise.resolve(userHero);
    }

    public async findAll(): Promise<Hero[]> {
        return Promise.resolve([userHero]);
    }
}
