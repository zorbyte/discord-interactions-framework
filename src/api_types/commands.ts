/* eslint-disable @typescript-eslint/no-namespace */

import {
  APIChatInputApplicationCommandInteractionData,
  RESTPostAPIApplicationCommandsJSONBody,
} from "discord-api-types";

import { Interactions } from "./interactions";
import { Options } from "./options";

export namespace Commands {
  export namespace ChatInput {
    export namespace Incoming {
      export type Interaction = Interactions.BaseInteraction<
        Interactions.Type.ApplicationCommand,
        Command
      > &
        Required<
          Pick<
            Interactions.BaseInteraction<
              Interactions.Type.ApplicationCommand,
              Command
            >,
            "channel_id" | "data"
          >
        >;

      export type Command = Omit<
        APIChatInputApplicationCommandInteractionData,
        "options"
      > & { options?: Options.Incoming.Option[] };
    }

    export namespace Outgoing {
      export type Command = RESTPostAPIApplicationCommandsJSONBody;
    }
  }
}
