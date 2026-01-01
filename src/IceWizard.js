"use strict";

const Wizard = require("./Wizard");

/*
  IceWizard:
  - Slightly lower damage
  - Also drains a bit of the opponent's mana (small extra effect)
  Returns true if the spell was successfully cast, otherwise false.
*/

class IceWizard extends Wizard {
  castSpell(opponent) {
    if (!this.isAlive()) {
      console.log(`${this.name} is defeated and can't move.`);
      return false;
    }

    if (!opponent?.isAlive?.()) {
      console.log(`${this.name} has no valid opponent.`);
      return false;
    }

    const manaCost = 14;
    const damage = 20;
    const manaDrain = 6;

    if (!this.spendMana(manaCost)) {
      console.log(`${this.name} tried to cast Ice Shard but has no mana.`);
      return false;
    }

    opponent.receiveDamage(damage);
    opponent.drainMana(manaDrain);

    console.log(
      `${this.name} casts ❄️ Ice Shard on ${opponent.name} for ${damage} damage and drains ${manaDrain} mana.`
    );
    return true;
  }
}

module.exports = IceWizard;
