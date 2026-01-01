"use strict";

const Wizard = require("./Wizard");

/*
  FireWizard:
  - Hits harder
  - Costs more mana
  Returns true if the spell was successfully cast, otherwise false.
*/

class FireWizard extends Wizard {
  castSpell(opponent) {
    // Dead wizards don't get turns
    if (!this.isAlive()) {
      console.log(`${this.name} is defeated and can't move.`);
      return false;
    }

    if (!opponent?.isAlive?.()) {
      console.log(`${this.name} has no valid opponent.`);
      return false;
    }

    const manaCost = 18;
    const damage = 28;

    if (!this.spendMana(manaCost)) {
      console.log(`${this.name} tried to cast Fireball but has no mana.`);
      return false;
    }

    opponent.receiveDamage(damage);

    console.log(`${this.name} throws 🔥 Fireball at ${opponent.name} for ${damage} damage.`);
    return true;
  }
}

module.exports = FireWizard;
