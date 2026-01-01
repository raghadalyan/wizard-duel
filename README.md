# 🧙‍♂️ Wizard Duel – JavaScript Console Game

This project is a simple **console-based wizard duel game** built using **Node.js** and JavaScript.

Two wizards (Fire and Ice) fight each other in turns using different spells until one of them wins the duel.

---

## 📂 Project Structure

wizard-duel/
│
├── src/
│ ├── index.js // Entry point – starts the duel
│ ├── Duel.js // Manages the duel logic and rounds
│ ├── Wizard.js // Base wizard class
│ ├── FireWizard.js // Fire wizard implementation
│ └── IceWizard.js // Ice wizard implementation
│
└── README.md
---

## 🎮 How the Game Works

- Two wizard objects are created with:
  - Name
  - Health Points (HP)
  - Mana

- The `Duel` class controls:
  - Turn order
  - Attacks and damage
  - Mana usage
  - Printing game status to the console

- Each round continues until one wizard’s HP reaches zero.

---

## 🧠 Concepts Used

- Object-Oriented Programming (OOP)
- Classes and Inheritance
- Encapsulation
- Game loop logic
- Node.js modules (`require`)
- Console output

---

## ▶️ How to Run the Game

Make sure **Node.js** is installed.

From the project root directory, run:

```bash
node src/index.js

## ⚙️ Customization

You can change the starting balance (HP and Mana) in index.js:

const fireWizard = new FireWizard("Player1 the Fire", 120, 70);
const iceWizard = new IceWizard("Player2 the Ice", 120, 70);
