import { Injectable } from "@nestjs/common";
import { ICommand, IEvent, ofType, Saga } from "@nestjs/cqrs";
import * as clc from "cli-color";
import { Observable } from "rxjs";
import { delay, map } from "rxjs/operators";

import { DropAncientItemCommand } from "../commands/impl/drop-ancient-item.command";
import { HeroKilledDragonEvent } from "../events/impl/hero-killed-dragon.event";

const itemId = "0";

@Injectable()
export class HeroesGameSagas {
    @Saga()
    public dragonKilled = (
        events$: Observable<IEvent>,
    ): Observable<ICommand> => {
        return events$.pipe(
            ofType(HeroKilledDragonEvent),
            delay(1000),
            map((event) => {
                console.log(clc.redBright("Inside [HeroesGameSagas] Saga"));
                return new DropAncientItemCommand(event.heroId, itemId);
            }),
        );
    };
}
