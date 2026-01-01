"use strict";

/*
  Base Wizard class.
  This is where we keep the shared stuff and the safety rules.

  Health + mana are private so no one can do:
    wizard.health = 999
    wizard.mana = 999

  If we want to change health/mana, we must go through methods.
*/

class Wizard {
  #health;
  #mana;

  constructor(name, startingHealth, startingMana) {
    if (!name || typeof name !== "string") {
      throw new Error("Wizard name must be a non-empty string");
    }
    if (!Number.isFinite(startingHealth) || startingHealth <= 0) {
      throw new Error("startingHealth must be a positive number");
    }
    if (!Number.isFinite(startingMana) || startingMana < 0) {
      throw new Error("startingMana must be a non-negative number");
    }

    this.name = name;
    this.maxHealth = startingHealth;
    this.maxMana = startingMana;

    this.#health = startingHealth;
    this.#mana = startingMana;
  }

  // Simple: alive means health > 0
  isAlive() {
    return this.#health > 0;
  }

  // Safe snapshot for printing (no direct access to private fields)
  getStatus() {
    return { name: this.name, health: this.#health, mana: this.#mana };
  }

  // Apply damage, but don't allow health to go below 0
  receiveDamage(amount) {
    if (!Number.isFinite(amount) || amount <= 0) return;

    this.#health -= amount;
    if (this.#health < 0) this.#health = 0;
  }

  // Try to spend mana. If not enough, return false (spell fails)
  spendMana(cost) {
    if (!Number.isFinite(cost) || cost <= 0) return false;
    if (this.#mana < cost) return false;

    this.#mana -= cost;
    return true;
  }

  // Small helper for special effects (like ice draining mana)
  drainMana(amount) {
    if (!Number.isFinite(amount) || amount <= 0) return;

    this.#mana -= amount;
    if (this.#mana < 0) this.#mana = 0;
  }

  /*
    Base spell method.
    Subclasses should override this and RETURN true/false:
      - true  => spell actually happened
      - false => wizard couldn't act (dead / not enough mana)
  */
  castSpell(_opponent) {
    console.log(`${this.name} waves a wand... but nothing special happens.`);
    return false;
  }
}

module.exports = Wizard;
