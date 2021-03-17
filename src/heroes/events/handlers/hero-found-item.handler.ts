import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import * as clc from "cli-color";

import { HeroFoundItemEvent } from "../impl/hero-found-item.event";

@EventsHandler(HeroFoundItemEvent)
export class HeroFoundItemHandler implements IEventHandler<HeroFoundItemEvent> {
    public handle(event: HeroFoundItemEvent): void {
        console.log(clc.yellowBright("Async HeroFoundItemEvent..."));
    }
}
