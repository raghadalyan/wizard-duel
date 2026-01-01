"use strict";

/*
  Duel controller:
  This class ONLY runs the fight loop.
  It does NOT touch health/mana directly.
  It only calls:
    - isAlive()
    - castSpell()
    - getStatus()

  Important fix:
  If both wizards can't cast (usually because both are out of mana),
  we stop the duel as a draw. Otherwise we get an infinite loop.
*/

class Duel {
  constructor(wizardA, wizardB) {
    this.wizardA = wizardA;
    this.wizardB = wizardB;
    this.roundNumber = 1;
  }

  // Print a quick status line for both players
  printRoundStatus() {
    const a = this.wizardA.getStatus();
    const b = this.wizardB.getStatus();

    console.log(`- ${a.name}: HP=${a.health}, Mana=${a.mana}`);
    console.log(`- ${b.name}: HP=${b.health}, Mana=${b.mana}`);
  }

  run() {
    console.log("🧙‍♂️⚔️🧙 Duel starts!");
    this.printRoundStatus();
    console.log("--------------------------------");

    while (this.wizardA.isAlive() && this.wizardB.isAlive()) {
      console.log(`Round ${this.roundNumber}`);

      // Each castSpell returns true if it actually did something
      const aActed = this.wizardA.castSpell(this.wizardB);
      if (!this.wizardB.isAlive()) break;

      const bActed = this.wizardB.castSpell(this.wizardA);

      // If nobody acted this round, nothing will ever change -> end as draw
      if (!aActed && !bActed) {
        console.log("Both wizards are out of mana. Nobody can continue.");
        console.log("🤝 Result: Draw");
        return;
      }

      this.printRoundStatus();
      console.log("--------------------------------");
      this.roundNumber++;
    }

    const winner = this.wizardA.isAlive() ? this.wizardA : this.wizardB;
    console.log(`🏆 Winner: ${winner.name}`);
  }
}

module.exports = Duel;
