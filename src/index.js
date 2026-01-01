"use strict";

/*
  Entry point.
  Just create the wizards and run the duel.
  If you want different balance, change the starting HP/Mana here.
*/

const FireWizard = require("./FireWizard");
const IceWizard = require("./IceWizard");
const Duel = require("./Duel");

const fireWizard = new FireWizard("Player1 the Fire", 120, 70);
const iceWizard = new IceWizard("Player2 the Ice", 120, 70);

const duel = new Duel(fireWizard, iceWizard);
duel.run();
