import { GameInstance } from '../classes/game-instance';

export class MgFightHandler {
  constructor(private instance: GameInstance) {}

  get fightersList() {
    return this.instance.window?.gui?.fightManager?._fighters;
  }

  get selfTarget() {
    return this.fightersList[this.instance.character.id];
  }
}